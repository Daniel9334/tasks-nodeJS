
const axios = require('axios');

async function getWeather(location) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=${location}`);
        return response.data.weather[0];
    } catch (error) {
        throw new Error(`Błąd pobierania informacji o pogodzie: ${error.message}`);
    }
}

module.exports = {
    getWeather,
};