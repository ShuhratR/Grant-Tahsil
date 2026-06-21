const MAX_BODY_SIZE = 16_384;

function sendJson(response, status, payload) {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(payload));
}

function parseBody(request) {
  if (request.body && typeof request.body === "object" && !Buffer.isBuffer(request.body)) {
    return request.body;
  }

  const raw = Buffer.isBuffer(request.body)
    ? request.body.toString("utf8")
    : String(request.body || "{}");

  if (Buffer.byteLength(raw, "utf8") > MAX_BODY_SIZE) {
    const error = new Error("body_too_large");
    error.code = "body_too_large";
    throw error;
  }

  return JSON.parse(raw);
}

function validApplication(body) {
  return body
    && typeof body.name === "string"
    && body.name.trim().length >= 2
    && body.name.length <= 80
    && Number.isInteger(Number(body.age))
    && Number(body.age) >= 1
    && Number(body.age) <= 150
    && typeof body.phone === "string"
    && body.phone.length >= 7
    && body.phone.length <= 30
    && typeof body.program === "string"
    && body.program.trim().length >= 1
    && body.program.length <= 80
    && Array.isArray(body.cities)
    && body.cities.length <= 5;
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { ok: false, error: "method_not_allowed" });
  }

  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL || "";
  const scriptSecret = process.env.GOOGLE_APPS_SCRIPT_SECRET || "";

  if (!scriptUrl || !scriptSecret) {
    return sendJson(response, 500, { ok: false, error: "sheets_not_configured" });
  }

  let application;
  try {
    application = parseBody(request);
  } catch (error) {
    return sendJson(response, error.code === "body_too_large" ? 413 : 400, {
      ok: false,
      error: error.code || "invalid_json"
    });
  }

  if (!validApplication(application)) {
    return sendJson(response, 400, { ok: false, error: "invalid_application" });
  }

  try {
    const upstream = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...application,
        secret: scriptSecret,
        source: "grant-tahsil-vercel",
        createdAt: new Date().toISOString()
      }),
      signal: AbortSignal.timeout(20000)
    });

    const result = await upstream.json().catch(() => null);
    if (!upstream.ok || !result?.ok) {
      return sendJson(response, 502, { ok: false, error: "sheets_rejected" });
    }

    return sendJson(response, 201, { ok: true, stored: true });
  } catch {
    return sendJson(response, 502, { ok: false, error: "sheets_request_failed" });
  }
};
