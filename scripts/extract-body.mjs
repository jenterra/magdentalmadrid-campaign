import fs from "fs";

const html = fs.readFileSync("source.html", "utf8");
const start = html.indexOf("<header data-elementor-type");
const endMain = html.indexOf('<script type="speculationrules">');
const endExtras = html.indexOf("const lazyloadRunObserver");

if (start === -1 || endMain === -1 || endExtras === -1) {
  console.error("markers not found", start, endMain, endExtras);
  process.exit(1);
}

const main = html.slice(start, endMain).trim();
const extrasStart = html.indexOf("<!-- Click to Chat");
const extras = extrasStart !== -1 ? html.slice(extrasStart, endExtras).trim() : "";
const body = `${main}\n${extras}`.trim();
fs.mkdirSync("src/content", { recursive: true });
fs.writeFileSync("src/content/site-body.html", body);
console.log("Extracted", body.length, "chars");
