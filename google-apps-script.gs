const SHEET_NAME = "Заявки";

function doPost(event) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);
    const data = JSON.parse(event.postData?.contents || "{}");
    const properties = PropertiesService.getScriptProperties();
    const expectedSecret = properties.getProperty("API_SECRET");
    const spreadsheetId = properties.getProperty("SPREADSHEET_ID");

    if (!expectedSecret || data.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: "unauthorized" });
    }

    if (!spreadsheetId) {
      return jsonResponse({ ok: false, error: "spreadsheet_id_missing" });
    }

    if (!data.name || !data.phone || !data.program || Number(data.age) < 1 || Number(data.age) > 150) {
      return jsonResponse({ ok: false, error: "invalid_application" });
    }

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Дата", "Имя", "Возраст", "Телефон", "Программа",
        "Города", "Знает китайский", "HSK", "Язык сайта", "Источник"
      ]);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      safeCell(data.name),
      Number(data.age),
      safeCell(data.phone),
      safeCell(data.program),
      Array.isArray(data.cities) ? data.cities.map(safeCell).join(", ") : "",
      data.knowsChinese ? "Да" : "Нет",
      safeCell(data.hsk),
      safeCell(data.language),
      safeCell(data.source || "grant-tahsil-site")
    ]);

    return jsonResponse({ ok: true, stored: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error.message || error) });
  } finally {
    lock.releaseLock();
  }
}

function safeCell(value) {
  let text = String(value ?? "").trim().slice(0, 500);
  if (/^[=+\-@]/.test(text)) text = "'" + text;
  return text;
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
