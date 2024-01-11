//ZAD3
//node app.js

const fs = require("fs");

// Pobieranie ścieżki pliku wywołującego program
const filePath = process.argv[1];

// Pobieranie statystyki pliku
fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error("Błąd podczas pobierania informacji o pliku:", err.message);
  } else {
    // Szczegóły pliku
    console.log("Ścieżka:", filePath);
    console.log("Czas utworzenia:", stats.birthtime);
    console.log("Czas modyfikacji:", stats.mtime);
    console.log("Rozmiar:", stats.size, "bajtów");
  }
});
