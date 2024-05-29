//complete this code
class Animal {
	constructor(species){
		this.animalspecies = species;
	}
	get species(){
		return this.animalspecies;
	}
	makeSound(){
		console.log("The " +this.species +" makes a sound")
	}
}

class Dog extends Animal {
	constructor(species){
		super(species)
	}
	bark(){
		console.log("bark")
	}
}

class Cat extends Animal {
	constructor(species){
		super(species)
	}
	purr(){
		console.log("purr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof