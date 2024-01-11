//moduł axios

const axios = require('axios');
const fs = require('fs');

async function fetchDataAndSave(filename, number) {
    // Wprowadzanie URL do API
    const apiUrl = `https://lukaszuk.net/numbers.php?number=${number}`;

    try {
        // Pobieranie danych z API
        const response = await axios.get(apiUrl);

        // Zapis pliku
        fs.writeFileSync(filename, JSON.stringify(response.data, null, 2));

        console.log(`Dane pobrane z API zapisano w pliku: ${filename}`);
    } catch (error) {
        console.log(`Błąd podczas pobierania danych z API: ${error.message}`);
    }
}

async function main() {
    try {
        // Odczytanie danych z pliku data.json
        const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

        // Pobieranie informacji z API i zapis do pliku 
        await fetchDataAndSave(data.filename, data.number);
    } catch (error) {
        console.log(`Błąd podczas przetwarzania: ${error.message}`);
    }
}

// Wywołanie funkcji
main(2);