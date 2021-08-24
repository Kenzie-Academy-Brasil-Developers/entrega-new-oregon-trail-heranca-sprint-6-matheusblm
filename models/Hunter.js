const Traveler  = require("./Traveler");

class Hunter extends Traveler{
	constructor(name,_isHealthy,food){
	super(name,_isHealthy,food)
	this.food = food + 1
	}
	hunt(){
		this.food = this.food + 5
	}
	eat(){
		if(this.food <= 1){
			this.food = 0
			this._isHealthy = false
		}else{
			this.food = this.food - 2
		}	
	}
	giveFood(traveler, numOfFoodUnits){
		if(numOfFoodUnits > this.food){
			this.food = this.food - numOfFoodUnits
			traveler.food = traveler.food + numOfFoodUnits
		}	
	}
}

module.exports = Hunter;