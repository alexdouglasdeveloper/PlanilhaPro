import * as XLSX from "xlsx";

export function readExcel(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const json = XLSX.utils.sheet_to_json(worksheet);

      resolve(json);
    };

    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

// ✅ NOVA FUNÇÃO — EXPORTAR
export function exportExcel(data, fileName = "produtos.xlsx") {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Produtos");

  XLSX.writeFile(workbook, fileName);
}
