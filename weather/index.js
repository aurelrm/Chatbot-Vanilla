"use strict";
const axios = require("axios");
const apikey = '6b9e7dde34eee5b9108f74e408ddc3f4'; //your api key to the apixu
const getWeather = location => {
    return new Promise(async (resolve, reject) => {
        try {
            const weatherConditions = await axios.get( //get weather info from the api
                'https://api.openweathermap.org/data/2.5/weather?q='+`${location}`+'&APPID=6b9e7dde34eee5b9108f74e408ddc3f4'
                  , {
                params: {
                    key: apikey,
                    q: location,
                    days: 3
                }
            });
            resolve(weatherConditions.data) 
        }
        catch (error) {
            reject(error);
        }
    });
}
module.exports = getWeather;