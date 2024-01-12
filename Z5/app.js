// moduł axios
// wywołanie node app.js octocat true (dopisek true wyświetli liczbę followersów) 

const { getUserInfo, getUserRepositories } = require('./github');
const { getWeather } = require('./weather');


// IIFE

(async () => {
    try {
        const username = process.argv[2];
        const showFollowers = process.argv[3] === 'true';  

        if (!username) {
            console.log('Podaj nazwę użytkownika');
            return;
        }
        const userInfo = await getUserInfo(username);
        console.log(`Nazwa użytkownika: ${userInfo.name}`);

        if (showFollowers) {
            console.log(`Śledzący użytkownicy: ${userInfo.followers}`);
        }

        const userRepositories = await getUserRepositories(username);

        console.log(`Liczba repozytoriów: ${userRepositories.length}`);

        console.log(`Nazwa repozytoriów:`);
        userRepositories.forEach(repo => console.log(repo.name));

        const weather = await getWeather(userInfo.location);
        console.log(`Pogoda: ${weather.main}, ${weather.description}s`);
    } catch (error) {
        console.log(`${error.message}`);
    }
})();








