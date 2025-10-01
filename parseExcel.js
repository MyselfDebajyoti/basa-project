// parseExcel.js
import * as XLSX from "xlsx";
import fs from "fs";

function parseExcel(filePath) {
  // Read the file into a buffer
  const fileBuffer = fs.readFileSync(filePath);

  // Parse the buffer
  const workbook = XLSX.read(fileBuffer, { type: "buffer" });

  // Take first sheet
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  // Convert sheet to JSON
  const jsonData = XLSX.utils.sheet_to_json(sheet);

  return jsonData;
}

const data = parseExcel("members.xlsx");

// Print to console
console.log(JSON.stringify(data, null, 2));

// Save to JSON file
fs.writeFileSync("members.json", JSON.stringify(data, null, 2), "utf-8");

console.log("✅ Excel data has been written to members.json");
