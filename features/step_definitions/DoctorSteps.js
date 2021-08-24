const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { viajante } = require("./../../app")
const { doctor } = require("./../../app");
const Traveler = require("./../../models/Traveler")
let doentinho = new Traveler("Jorginho", false, 1);
let saudavel = new Traveler("JP", true, 1);

Given('um Doutor de nome {string}', function (string) {
	doctor.name = string
      });

Given('o Doutor sempre começa a viagem com {int} refeição', function (int) {
    	  doctor.food = int;
         });

Given('o Doutor sempre começa a viagem saudável.', function () {
	doctor.isHealthy = true;
	});

When('o Doctor curar', function () {
	doctor.heal(doentinho)
	});

When('se o Traveler ja estiver saudável, ele continua', function () {
	saudavel._isHealthy === true
	});
	
Then('o Traveler sera curado', function () {
	assert.strictEqual(doentinho._isHealthy, true)
      });
