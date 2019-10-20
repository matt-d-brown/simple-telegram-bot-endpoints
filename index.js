'use strict';

const config = require('./config.js');
const telegram        = require('telegram-bot-api');
// const request = require('request');
const baseCurrency    = "USD";
const targetCurrency  = "GBP";

const api = new telegram({
	                         token  : config.botToken,
	                         updates: {
		                         enabled     : true,
		                         get_interval: 1000
	                         }
                         });

api.on('message', function (message) {
	const chat_id = message.chat.id;
	
	api.sendMessage({
		                chat_id: chat_id,
		                text: message.text ? message.text : 'This message doesn\'t contain text :('
	                })
			.then(function (message) {
				console.log(message);
			})
			.catch(function (err) {
				console.log(err);
			});
});

