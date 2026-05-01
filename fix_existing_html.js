const fs = require('fs');

const htmlFile = 'navbars-copy-paste.html';
let content = fs.readFileSync(htmlFile, 'utf-8');

// Regex to find __html: `...` in cloned Navbar components
const htmlLiteralRegex = /(__html: `)([\s\S]*?)(`)/g;

content = content.replace(htmlLiteralRegex, (fullMatch, prefix, rawHtml, suffix) => {
  // 1. Remove entire <script>...</script> tags
  let cleanedHtml = rawHtml.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  // 2. Remove any stray </script> sequence even inside strings
  cleanedHtml = cleanedHtml.replace(/<\/script>/gi, '');
  // 3. Escape backticks by replacing ` with \`
  cleanedHtml = cleanedHtml.replace(/`/g, '\\`');
  // 4. Escape ${ sequences so they are not interpreted as template literals
  cleanedHtml = cleanedHtml.replace(/\$\{/g, '\\${');
  return `${prefix}${cleanedHtml}${suffix}`;
});

fs.writeFileSync(htmlFile, content, 'utf-8');
console.log('Fixed navbars-copy-paste.html: removed script tags, escaped backticks and ${ sequences.');
