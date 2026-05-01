const fs = require('fs');

const htmlFile = 'navbars-copy-paste.html';
let content = fs.readFileSync(htmlFile, 'utf-8');

// Strategy: find the inline Babel script and fix all </script> inside it
// The script starts with <script type="text/babel" data-presets="react">
// We need to:
// 1. Extract the script content
// 2. Fix </script> inside it
// 3. Put it back

const scriptRegex = /(<script type="text\/babel" data-presets="react">)([\s\S]*?)(<\/script>)/g;

content = content.replace(scriptRegex, (fullMatch, openTag, scriptContent, closeTag) => {
  // In the script content, replace </script> with <\/script>
  // But only inside strings (we can't easily distinguish, so let's just replace all occurrences)
  // Actually, we need to be smarter: only replace </script> that's inside JS strings
  
  // For template literals (__html: `...`), we base64-encode the content
  let fixedScript = scriptContent.replace(
    /(__html:\s*`)([\s\S]*?)(`)/g,
    (match, prefix, htmlContent, suffix) => {
      // Strip script tags and base64 encode
      let cleaned = htmlContent
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<\/script>/gi, '<\\/script>');
      const encoded = Buffer.from(cleaned, 'utf-8').toString('base64');
      return `__html: atob('${encoded}')`;
    }
  );
  
  return openTag + fixedScript + closeTag;
});

fs.writeFileSync(htmlFile, content, 'utf-8');
console.log('Fixed: base64-encoded HTML in __html assignments.');
