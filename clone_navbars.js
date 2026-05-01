const fs = require('fs');
const { chromium } = require('playwright');

(async () => {
  // Load URLs
  const urls = JSON.parse(fs.readFileSync('navbar_urls.json', 'utf-8'));
  const htmlFile = 'navbars-copy-paste.html';
  let htmlContent = fs.readFileSync(htmlFile, 'utf-8');

  // Prepare insertion points
  const useStateLine = 'const { useState } = React;';
  const navbarsArrayRegex = /const\s+navbars\s*=\s*\[(.*?)]\s*;/s;
  const match = htmlContent.match(navbarsArrayRegex);
  if (!match) {
    console.error('Could not find navbars array');
    process.exit(1);
  }
  const existingArrayContent = match[1];

  const componentDefs = [];
  const newNavbarEntries = [];

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const compName = `Navbar${i + 1}`;
    // Skip if component already exists in the HTML file
    if (htmlContent.includes(`function ${compName}(`)) {
      console.log(`Skipping ${url}: component ${compName} already exists`);
      continue;
    }
    try {
      // Navigate with a longer timeout to accommodate slower sites
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

      // Try to locate a navigation element; fall back to common alternatives
      let navHTML = '';
      try {
        await page.waitForSelector('nav', { timeout: 5000 });
        navHTML = await page.evaluate(() => {
          const nav = document.querySelector('nav');
          return nav ? nav.outerHTML : '';
        });
      } catch {
        const fallbacks = ['header', '[role="navigation"]'];
        for (const sel of fallbacks) {
          try {
            await page.waitForSelector(sel, { timeout: 5000 });
            navHTML = await page.evaluate((s) => {
              const el = document.querySelector(s);
              return el ? el.outerHTML : '';
            }, sel);
            if (navHTML) break;
          } catch {}
        }
      }

      if (!navHTML) {
        throw new Error('No navigation element found');
      }

      const escapedNavHTML = navHTML.replace(/`/g, '\\`').replace(/\\/g, '\\\\');
      const compDef = `function ${compName}() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div dangerouslySetInnerHTML={{ __html: \`${escapedNavHTML}\` }} />
    </motion.div>
  );
}`;
      componentDefs.push(compDef);

      const entry = `{ name: 'Navbar #${i + 1} (${url})', comp: <${compName} />, code: \`${compDef.replace(/`/g, '\\`')}\` }`;
      newNavbarEntries.push(entry);
    } catch (e) {
      console.error(`Failed to process ${url}:`, e);
    }
  }

  await browser.close();

  // Insert component definitions after the useState line
  const parts = htmlContent.split(useStateLine);
  if (parts.length < 2) {
    console.error('Could not find useState line');
    process.exit(1);
  }
  htmlContent = parts[0] + useStateLine + '\n' + componentDefs.join('\n\n') + '\n' + parts.slice(1).join(useStateLine);

  // Append new entries to navbars array while preserving existing entries
  const updatedArray = `${existingArrayContent},\n${newNavbarEntries.join(',\n')}`;
  htmlContent = htmlContent.replace(navbarsArrayRegex, `const navbars = [${updatedArray}];`);

  // Write back to file
  fs.writeFileSync(htmlFile, htmlContent, 'utf-8');
  console.log('Navbar cloning complete. Updated navbars-copy-paste.html');
})();
