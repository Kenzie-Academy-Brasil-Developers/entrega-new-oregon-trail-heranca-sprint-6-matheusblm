class Wagon {
	constructor(capacity) {
	    this.capacity = capacity;
	    this.passengers = [];
	}
	getAvailableSeatCount(){
		
		if(this.capacity > this.passengers.length){
			return this.capacity - this.passengers.length
		}else{
			return 0
		}
	}
	join(name){
		if(this.capacity > this.passengers.length){
		this.passengers.push(name)
		}
	}
	shouldQuarantine(){
		for(let i = 0; i < this.passengers.length; i++){
			if(this.passengers[i]._isHealthy !== "true"){
				return true
			}	
		}
		return false
	}
	totalFood(){
		let tFood = 0
		for(let i = 0; i < this.passengers.length; i++){
			tFood = tFood + Number(this.passengers[i].food)
			
		}
		return tFood
	}
}

module.exports = Wagon;