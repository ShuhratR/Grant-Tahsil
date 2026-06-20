const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = __dirname;
const envFile = path.join(ROOT, ".env");
if (fs.existsSync(envFile)) {
  fs.readFileSync(envFile, "utf8").split(/\r?\n/).forEach((line) => {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (match && process.env[match[1]] === undefined) process.env[match[1]] = match[2].trim();
  });
}
const PORT = Number(process.env.PORT || 4173);
const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL || "";
const GOOGLE_APPS_SCRIPT_SECRET = process.env.GOOGLE_APPS_SCRIPT_SECRET || "";
const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml"
};

function json(response, status, payload) {
  response.writeHead(status, { "Content-Type": MIME[".json"], "Cache-Control": "no-store" });
  response.end(JSON.stringify(payload));
}

function validApplication(body) {
  return body && typeof body.name === "string" && body.name.trim().length >= 2 && body.name.length <= 80
    && Number.isInteger(Number(body.age)) && Number(body.age) >= 1 && Number(body.age) <= 150
    && typeof body.phone === "string" && body.phone.length >= 7 && body.phone.length <= 30
    && typeof body.program === "string" && body.program.length <= 80
    && Array.isArray(body.cities) && body.cities.length <= 5;
}

async function handleApplication(request, response) {
  let raw = "";
  request.on("data", (chunk) => {
    raw += chunk;
    if (raw.length > 16_384) request.destroy();
  });
  request.on("end", async () => {
    try {
      const body = JSON.parse(raw || "{}");
      if (!validApplication(body)) return json(response, 400, { ok: false, error: "invalid_application" });
      if (!GOOGLE_APPS_SCRIPT_URL) return json(response, 202, { ok: true, stored: false, mode: "whatsapp_fallback" });
      if (!GOOGLE_APPS_SCRIPT_SECRET) return json(response, 500, { ok: false, error: "sheets_secret_missing" });
      const upstream = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...body,
          secret: GOOGLE_APPS_SCRIPT_SECRET,
          source: "grant-tahsil-site",
          createdAt: new Date().toISOString()
        }),
        signal: AbortSignal.timeout(8000)
      });
      if (!upstream.ok) return json(response, 502, { ok: false, error: "sheets_upstream_failed" });
      const result = await upstream.json().catch(() => null);
      if (!result?.ok) return json(response, 502, { ok: false, error: result?.error || "sheets_invalid_response" });
      return json(response, 201, { ok: true, stored: true });
    } catch (error) {
      const invalidJson = error instanceof SyntaxError;
      return json(response, invalidJson ? 400 : 502, {
        ok: false,
        error: invalidJson ? "invalid_json" : "sheets_request_failed"
      });
    }
  });
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  if (request.method === "POST" && url.pathname === "/api/applications") return handleApplication(request, response);
  if (request.method !== "GET" && request.method !== "HEAD") return json(response, 405, { ok: false, error: "method_not_allowed" });
  const requested = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.slice(1));
  const file = path.resolve(ROOT, requested);
  if (!file.startsWith(ROOT) || file.includes(`${path.sep}backup-before-3d${path.sep}`) || file.includes(`${path.sep}node_modules${path.sep}`)) {
    return json(response, 404, { ok: false, error: "not_found" });
  }
  fs.stat(file, (error, stat) => {
    if (error || !stat.isFile()) return json(response, 404, { ok: false, error: "not_found" });
    response.writeHead(200, { "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream", "X-Content-Type-Options": "nosniff" });
    if (request.method === "HEAD") return response.end();
    fs.createReadStream(file).pipe(response);
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Grant Tahsil: http://127.0.0.1:${PORT}`);
});
