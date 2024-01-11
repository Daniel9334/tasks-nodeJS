const fs = require('fs').promises;

// Funkcja odczytu zadań z pliku
async function readTasks() {
  try {
    const data = await fs.readFile('tasks.json', 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Funkcja zapisu zadań do pliku
async function writeTasks(tasks) {
  try {
    await fs.writeFile('tasks.json', JSON.stringify(tasks, null, 2), 'utf-8');
    console.log('Zadania zostały pomyślnie zapisane.');
  } catch (error) {
    console.error('Błąd podczas zapisywania zadań:', error.message);
  }
}

module.exports = {
  readTasks,
  writeTasks,
};