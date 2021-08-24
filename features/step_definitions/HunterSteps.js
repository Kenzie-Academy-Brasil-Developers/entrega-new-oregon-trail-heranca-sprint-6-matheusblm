const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");


const { viajante } = require("./../../app")
const { hunter } = require("./../../app");
const Traveler = require("./../../models/Traveler")
let george = new Traveler("george", true, 2);


Given('um Hunter de nome {string}', function (string) {
         hunter.name = string
});

Given('o Hunter sempre começa a viagem com {int} refeição', function (int) {
	hunter.food = int
});
     
Given('o Huntere começa a viagem saudável.', function () {
	hunter._isHealthy = true
});
       


When('o Hunter sair para caçar {int} vezes', function (int) {
	for(let i = 0; i < int ; i++){
		hunter.hunt()
	}
});

When('o Hunter parar para comer {int} vezes', function (int) {
	for(let i = 0; i < int ; i++){
		hunter.eat()
	}
 });

 When('o Hunter parar para dar comida {int} vezes', function (int) {
	for(let i = 0; i < int ; i++){
		hunter.giveFood(george,2)
		hunter.food = hunter.food - 2
	}
         });

When('o Hunter douo comida {int} vezes', function (int) {
	for(let i = 0; i < int ; i++){
		hunter.giveFood(george,2)
		hunter.food = hunter.food - 2
	}
	});

When('o Hunter douo {int} veze', function (int) {
	for(let i = 0; i < int ; i++){
		hunter.giveFood(george,2)
		hunter.food = hunter.food - 2
	}
		});
	     

Then('a quantidade de refeições do primeiro Hunter deve ser igual a {int}', function (int) {
	console.log(hunter.food)
	assert.strictEqual(hunter.food, int)
	});

Then('a quantidade de refeições do Hunter depois deve ser igual a {int}', function (int) {
	assert.strictEqual(hunter.food, int)
	});
   

Then('o Hunter não ficará doente', function () {
	assert.strictEqual(hunter._isHealthy, true)	
	});
	    
Then('a quantidade de refeições dada deve ser igual {int}', function (int) {
      	assert.strictEqual(george.food, int)	
         });

Then('o Hunter ficará com {int}', function (int) {
	assert.strictEqual(hunter.food, int)
         });


  
Then('a quantidade de refeições deve ser {int}', function (int) {
		assert.strictEqual(hunter.food, int)
	   });
	 

Then('o Hunter ficará doente', function () {
	     hunter._isHealthy = false
	     assert.strictEqual(hunter._isHealthy, false)
	   });
  
Then('a quantidade de refeições do hunter deve ser {int}', function (int) {
	assert.strictEqual(hunter.food, int)
	});

Then('a quantidade de refeições do hunter deve ser igual a {int}', function (int) {
	assert.strictEqual(hunter.food, int)
	});
	 


	
       
