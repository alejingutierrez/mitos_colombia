const readXlsxFile = require("read-excel-file/node");

function normalizeCell(value) {
  return value ?? "";
}

function tableToObjects(table) {
  const [headerRow, ...dataRows] = table;

  if (!headerRow) {
    return [];
  }

  const headers = headerRow.map((value) => String(normalizeCell(value)).trim());

  return dataRows
    .filter((row) => row.some((value) => String(normalizeCell(value)).trim()))
    .map((row) => {
      const record = {};

      headers.forEach((header, index) => {
        if (!header) {
          return;
        }

        record[header] = normalizeCell(row[index]);
      });

      return record;
    });
}

async function readWorkbookRows(filePath, sheetName = "Sheet1") {
  const sheets = await readXlsxFile(filePath);
  const sheet =
    sheets.find((item) => item.sheet === sheetName) ||
    sheets.find((item) => Array.isArray(item.data));

  if (!sheet) {
    throw new Error("No sheets found in the Excel file.");
  }

  return tableToObjects(sheet.data);
}

module.exports = { readWorkbookRows };
