class Felidae {
	constructor() {
		this.claws = "retractable";
	}
}

class Panthera extends Felidae {
	constructor() {
    super();
		this.roar = "loud";
	}
}

class Tiger extends Panthera {
	constructor() {
    super();
		this.hasStripes = "true";
	}
}

let tigger = new Tiger();

console.log(tigger);
class Plant {
	constructor(type, height) {
	   this.type = type;
	   this.height = height;
	}
 
	grow () {
	   this.height = this.height + 1;
	}
 }