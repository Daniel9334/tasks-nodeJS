
const axios = require('axios');

async function getUserInfo(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    } catch (error) {
        throw new Error(`Błąd pobierania danych użytkownika Github: ${error.message}`);
    }
}

async function getUserRepositories(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        return response.data;
    } catch (error) {
        throw new Error(`Błąd pobierania repozytoriów użytkownika Github: ${error.message}`);
    }
}

module.exports = {
    getUserInfo,
    getUserRepositories,
};



