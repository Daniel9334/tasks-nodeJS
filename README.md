******** ENG VERSION ******** 

## Tasks

1. Write the simplest code that will cause a `stack overflow` error, meaning it will return the error message:

    ```
    Uncaught RangeError: Maximum call stack size exceeded
    ```

2. Write an application that accepts a string as a startup parameter and then displays it in rainbow colors. Use the `colors` module (https://www.npmjs.com/package/colors) version 1.3.2! Remember to handle errors.

    The way of handling input parameters is up to you (add a comment in the code with an example of how to call it).

3. Write a program that displays the details of the file containing your source code.

    Information to display:
    - creation time
    - modification time
    - size

    The program should work correctly even after renaming and relocating the file — without changing the source code!

    Example command:
    ```bash
    > node app.js //displays details of the app.js file
    ```
    After renaming app.js to app2.js:
    ```bash
    > node app2.js //displays details of the app2.js file
    ```

    Hint: This is possible using built-in Node.js modules.

4. Write an application that reads a number and a filename from the `data.json` file, then:
    - retrieves information about that number from the API (https://lukaszuk.net/numbers.php?number={number}, e.g., https://lukaszuk.net/numbers.php?number=1)
    - saves the data retrieved from the API in the file with the previously fetched name.

    Example of the data.json file:
    ``` JSON
    {
        "number": "588",
        "filename": "file.json"
    }
    ```

    Remember to handle errors. Perform API requests and file writing asynchronously.

5. Create an application that fetches user information and their repositories from GitHub. Additionally, check the current weather at the user's location.
    - The startup parameters should include the username and optionally whether to display the number of followers of the user. The way of handling input parameters is up to you (add a comment in the code with an example of how to call it).
    - Display the user's name (`name`).
    - Display the number of followers (`followers`) — only if the relevant parameter is used when starting the application.
    - Display the number of repositories.
    - Display the repository names (`name`).
    - Display the weather description (`weather.main`, `weather.description`) for the user's location (`location` — returned by GitHub in user data).
    - Perform API requests asynchronously.
    - Remember to handle errors.
    - Split the solution into modules.

    List of API endpoints:
    - user data: https://api.github.com/users/{username}
        - e.g., https://api.github.com/users/octocat
    - user repositories: https://api.github.com/users/{username}/repos
        - e.g., https://api.github.com/users/octocat/repos   
    - weather: https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q={name}
        - e.g., https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=Białystok

6. Write an application that allows storing a to-do list in a file. The application should allow adding a new task to the list and also displaying the entire list. When run without parameters, the application should inform the user about possible command options.

    - Perform read/write operations asynchronously.
    - Remember to handle errors.
    - Inform the user about the success of operations.
    - Separate reading and writing of data into separate modules.

    It's suggested to use the `yargs` module with the `yargs.command` structure.

    Example command:
    ```bash
    > node app.js add "Write a program for the NodeJS exam"
    ```

    ```bash
    > node app.js list
    ```

******** PL VERSION ******** 
   
## Zadania

1. Napisz jak najprostszy kod który spowoduje błąd `stack overflow`,

    czyli zwróci komunikat błędu:

    ```
    Uncaught RangeError: Maximum call stack size exceeded
    ```

2. Napisz aplikację która przyjmuje w parametrze uruchamiania ciąg znaków a następnie wyświetli go w kolorach tęczy. Wykorzystaj moduł `colors` (https://www.npmjs.com/package/colors) w wersji 1.3.2!. Pamiętaj o obsłudze błędów.

    Sposób obsługi parametrów wejściowych jest dowolny (w kodzie rozwiązania należy dodać komentarz z przykładowym wywołaniem).

3. Napisz program który wypisze szczegóły pliku z własnym kodem źródłowym.

    Wypisywane informacje:
    - czas utworzenia
    - czas modyfikacji
    - rozmiar

    Program powinien działać poprawnie także po zmianie nazwy i lokalizacji pliku - bez zmiany kodu źródłowego!

    Przykłady wywołania
    ```bash
    > node app.js //wyświetla szczegóły pliku app.js
    ```
    po zmianie nazwy app.js na app2.js
    ```bash
    > node app2.js //wyświetla szczegóły pliku app2.js
    ```
    Podpowiedź: jest to możliwe przy użyciu wbudowanych modułów Node.js.

4. Napisz aplikację która odczyta z pliku `data.json` liczbę oraz nazwę pliku, a następnie:
    - pobierze z API informacje o danej liczbie (https://lukaszuk.net/numbers.php?number={number}, np https://lukaszuk.net/numbers.php?number=1)
    - informacje pobrane z API zapisze w pliku o pobranej wcześniej nazwie

    Przykład pliku: data.json
    ``` JSON
    {
        "number": "588",
        "filename": "file.json"
    }
    ```

    Pamiętaj o obsłudze błędów. Żądania do API oraz zapis do pliku wykonuj asynchronicznie.

5. Stwórz aplikację która pobierze z GitHuba informacje o użytkowniku i jego repozytoriach. Dodatkowo sprawdź aktualną pogodę w lokalizacji użytkownika.
    - w parametrach uruchomienia jest podawany login użytkownika oraz opcjonalnie informacja czy wyświetlać liczbę śledzących użytkownika, sposób obsługi parametrów wejściowych jest dowolny (w kodzie rozwiązania należy dodać komentarz z przykładowym wywołaniem).
    - wyświetl nazwę użytkownika (`name`)
    - wyświetl liczbę śledzących użytkownika (`followers`) - tylko jeżeli użyto odpowiedniego parametru przy uruchomieniu aplikacji
    - wyświetl liczbę repozytoriów
    - wyświetl nazwy repozytoriów (`name`)
    - wyświetl opis pogody (`weather.main`, `weather.description`) w lokalizacji użytkownika (`location` - zwraca GitHub w danych użytkownika)
    - żądania do API wysyłaj asynchronicznie
    - pamiętaj o obsłudze błędów
    - podziel rozwiązanie na moduły

    Lista endpointów API:
    - dane użytkownika: https://api.github.com/users/{username}
        - np https://api.github.com/users/octocat
    - repozytoria użytkownika: https://api.github.com/users/{username}/repos
        - np https://api.github.com/users/octocat/repos   
    - pogoda: https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q={name}
        - np https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=Białystok

6. Napisz aplikację pozwalającą na przechowywanie w pliku listy zadań do wykonania (klasyczna lista TODO). Aplikacja powinna pozwalać na dodanie do listy nowego zadania, jak również wyświetlić zawartość całej listy. Przy uruchomieniu bez parametrów aplikacja powinna informować o możliwych parametrach wywołania.

    - zapis/odczyt wykonuj asynchronicznie
    - pamiętaj o obsłudze błędów
    - poinformuj użytkownika o poprawności wykonanych operacji
    - wydziel odczyt i zapis informacji do osobnych modułów

    Sugeruje użyć modułu `yargs` z konstrukcją `yargs.command`. 

    Przykład wywołania programu:
    ```bash
    > node app.js dodaj "napisac program na zaliczenie z NodeJS"
    ```

    ```bash
    > node app.js lista
    ```
