//ZAD2
//moduł colors
//node app.js "Tekst w kolorach tęczy"

const colors = require('colors');

// Funkcja do wyświetlania ciągu znaków w kolorach tęczy
function displayRainbowText(inputString) {
  // Sprawdzenie, ciąg jest pusty
  if (!inputString) {
    console.error('Błąd: Nie podano ciągu znaków do wyświetlenia!');
    return;
  }

  // Wyświetlanie ciągu znaków w kolorach tęczy
  const rainbowText = inputString.rainbow;
  console.log(rainbowText);
}

// Obsługa parametrów wejściowych
const userInput = process.argv[2];

// Wywołanie funkcji z obsługą błędów
try {
  displayRainbowText(userInput);
} catch (error) {
  console.error('Błąd podczas wyświetlania kolorowego tekstu:', error.message);
}