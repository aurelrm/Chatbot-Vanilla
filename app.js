'use strict';
var dico = require('./patterns')
const Readline = require('readline');
const axios = require('axios');
const rl = Readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
})
const matcher = require('./matcher')
const weather = require("./weather")

rl.prompt();
rl.on('line', reply => {

	matcher(reply, cb => {
		//console.log(`${cb.intent}`)
		switch (`${cb.intent}`) {
			case 'Hello':
				console.log('Chatbot > ' + cb.entities.greeting);
				rl.prompt();
				break;

			case 'Current Weather2':
				console.log(`${cb.entities.city}`);
				rl.prompt();
				break;

			case 'Current Weather':
				//console.log(`${cb.entities.city}`);
				giveWeather(`${cb.entities.city}`).then((value) => {
					console.log('The weather of ' + `${cb.entities.city}` + ' now is ' + value.weather[0].main + ' and the temperature is ' + (value.main.temp- 273,15) + '°C');
					//console.log("it work")
				});
				//console.log('Do you want the weather for tomorrow ?')
				rl.prompt();
				break;

			case 'time':
				giveWeather(`${cb.entities.city}`).then((value) => {
					console.log('Chatbot > It\'s aroud ' + value.timezone/3600 + ' in ' + cb.entities.city );
				})
				break;
			case 'Current Weather2':

				//console.log(`${cb.entities.city}`);
				giveWeather(`${cb.entities.city}`).then((value) => {
					console.log('Chatbot > The weather of ' + `${cb.entities.city}` + ' now is ' + value.weather[0].main + ' and the temperature is ' + (value.main.temp- 273,15) + '°C');
					//console.log("it work")
				});
				//console.log('Do you want the weather for tomorrow ?')
				
				break;

			case 'time':
				console.log('time');
				rl.prompt();
				break;

			case 'Exit':
				console.log('Chatbot > See you next time');
				process.exit();

			default: console.log('Chatbot > sorry but I dont understand');
		}
	});
});

async function giveWeather(city) {
	return await weather(city);

}
