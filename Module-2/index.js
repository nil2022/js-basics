// index.js

require('./third')
console.log('Hello, I am outside from browser')


let temp = {
	name : 'Arpit',
	address: 'Kanpur'
}

function printFn(){
	console.log('hello I am printfn()');
}

printFn()

function getTemp(){
	return 'hello I am temp';
}


module.exports = {
	tempVariable : temp,
	method : getTemp
}