//moduł yargs
//dodawanie node app.js dodaj --opis "Napisać zadania na zaliczenie"
//sprawdzanie listy node app.js lista

const yargs = require('yargs');
const { readTasks, writeTasks } = require('./tasks');

// Komenda dodawania nowego zadania
yargs.command({
  command: 'dodaj',
  describe: 'Dodaj nowe zadanie do listy',
  builder: {
    opis: {
      describe: 'Opis nowego zadania',
      demandOption: true,
      type: 'string',
    },
  },
  handler: async (argv) => {
    const tasks = await readTasks();
    tasks.push({ opis: argv.opis, done: false });
    await writeTasks(tasks);
  },
});

// Komenda wyświetlania listy zadań
yargs.command({
  command: 'lista',
  describe: 'Wyświetl listę zadań',
  handler: async () => {
    const tasks = await readTasks();
    if (tasks.length === 0) {
      console.log('Lista zadań jest pusta.');
    } else {
      console.log('Lista zadań:');
      tasks.forEach((task, index) => {
        console.log(`${index + 1}. [${task.done ? 'x' : ' '}] ${task.opis}`);
      });
    }
  },
});

// Informacja o parametrach wywołania
if (process.argv.length <= 2) {
  console.log('Użyj parametru: node app.js <parametr>');
  console.log('Dostępne parametry: dodaj --opis "tekst"; lista');
}

// Parsowanie argumentów wiersza poleceń
yargs.parse();


