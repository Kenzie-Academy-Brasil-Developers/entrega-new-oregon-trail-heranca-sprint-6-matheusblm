class Traveler {
	constructor(name,_isHealthy,food) {
	    this.name = name;
	    this._isHealthy = _isHealthy
	    this.food = food;
	 
	}
	hunt(){
	this.food = this.food + 2
	}
	eat(){
		if(this.food > 0){
			this.food = this.food - 1
			this._isHealthy = true
		}else{
			this._isHealthy = false
		}	
	}
	
}


module.exports = Traveler;


