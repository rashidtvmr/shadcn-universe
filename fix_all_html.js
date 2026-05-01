const fs = require('fs');

const htmlFile = 'navbars-copy-paste.html';
let content = fs.readFileSync(htmlFile, 'utf-8');

// Find all __html: `...` template literals (the executed components)
// and replace with base64-encoded version
const componentHtmlRegex = /(__html:\s*`)([\s\S]*?)(`)/g;

content = content.replace(componentHtmlRegex, (match, prefix, rawHtml, suffix) => {
  // Strip all script tags
  let cleaned = rawHtml.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  // Remove any stray </script> text
  cleaned = cleaned.replace(/<\/script>/gi, '');
  // Base64 encode
  const encoded = Buffer.from(cleaned, 'utf-8').toString('base64');
  return `__html: atob('${encoded}')`;
});

// Also fix the code strings in the navbars array
// These are inside backtick strings and contain the full component source
// We need to find code: `...` patterns and fix any __html: `...` inside them
const codeBlockRegex = /(code:\s*`)([\s\S]*?)(`,\s*})/g;

content = content.replace(codeBlockRegex, (match, prefix, codeContent, suffix) => {
  // Inside the code string, replace any __html: `...` with base64 version
  const fixedCode = codeContent.replace(/(__html:\s*`)([\s\S]*?)(`)/g, (m, p, html, s) => {
    let cleaned = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    cleaned = cleaned.replace(/<\/script>/gi, '');
    const encoded = Buffer.from(cleaned, 'utf-8').toString('base64');
    return `__html: atob('${encoded}')`;
  });
  return `${prefix}${fixedCode}${suffix}`;
});

fs.writeFileSync(htmlFile, content, 'utf-8');
console.log('Fixed: All embedded HTML is now base64-encoded via atob().');
