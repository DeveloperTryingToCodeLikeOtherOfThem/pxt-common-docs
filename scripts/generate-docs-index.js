const fs = require("fs");
const path = require("path");
 
const DOCS_DIR = path.join(__dirname, "..", "docs");
const OUTPUT_FILE = path.join(__dirname, "..", "docs-index.html");

const RAW_BASE =
  "https://raw.githubusercontent.com/DeveloperTryingToCodeLikeOtherOfThem/pxt-hardware-programming-docs/master/docs/";

function generate() { 
  const files = fs.readdirSync(DOCS_DIR)
    .filter(f => f.endsWith(".md"));

  const links = files.map(f => {
    return `<li><a href="${RAW_BASE}${f}" target="_blank">${f}</a></li>`;
  }).join("\n");

  const html = `
<html>
  <head><title>Docs Index</title></head>
  <body>
    <h1>Documentation Files</h1>
    <ul>
      ${links}
    </ul>
  </body>
</html>
`;

  fs.writeFileSync(OUTPUT_FILE, html);
  console.log("Generated docs-index.html");
}

generate();
