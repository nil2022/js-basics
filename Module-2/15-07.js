// //ES6
// class Animal{

// 	constructor(type,color){
// 		this.type = type;
// 		this.color = color;
// 	}

// 	walk(){
// 		console.log('I can walk')
// 	}

// 	eat(){
// 		console.log('I can eat', this.type, this.color)
// 	}
// }

// // tradational way before ES6
// // function Animal(type, color){
// // 	this.type = type;
// // 	this.color = color
// // }


// let animal1 = new Animal('dog', 'white')
// console.log(animal1.walk())

// let animal2 = new Animal('cat','black')

// console.log('animal2', animal2.eat())



let temp = {
	name: "Rohan",
	age: 23,
	intro : function(){
		return `Hello I am ${this.name} and my age is ${this.age}`
	}
}



temp.intro()
var name = 'helllo Arpit'

function abc(){
	console.log(this.name)
}



abc()