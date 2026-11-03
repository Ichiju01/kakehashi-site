// ローカル確認用の簡易サーバー: node serve.mjs（公開用フォルダを見るときは node serve.mjs <フォルダ>）
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = process.argv[2] ? process.argv[2].replace(/\/?$/, "/") : fileURLToPath(new URL(".", import.meta.url));
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".png": "image/png" };
const port = process.argv[3] || process.env.PORT || 5173;

createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^(\.\.[/\\])+/, "");
  const file = join(root, path.endsWith("/") ? path + "index.html" : path);
  try {
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": (types[extname(file)] || "application/octet-stream") + "; charset=utf-8", "Cache-Control": "no-store" });
    res.end(body);
  } catch {
    res.writeHead(404); res.end("Not found");
  }
}).listen(port, () => console.log(`http://localhost:${port}`));
