const Traveler  = require("./Traveler");

class Doctor extends Traveler{
	constructor(name,_isHealthy,food){
		super(name,_isHealthy,food)
		}
		heal(traveler){
		if(traveler._isHealthy === false){
			traveler._isHealthy = true
		}
		}

}

module.exports = Doctor;