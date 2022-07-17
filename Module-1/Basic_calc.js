//Program to execute Basic calculator
var a = prompt("Enter number 1 ");
var b = prompt("Enter number 2 ");
var oper = prompt("Enter operation +,-,*,/ ");
if(oper=='+'){
  document.write(`The sum of ${a} & ${b} is ${a+b}`);
}
else if(oper=='-'){
  document.write(`The subtraction of ${a} from ${b} is ${b-a}`);
} 
else if(oper=='*'){
  document.write(`The Multiply of ${a} & ${b} is ${a*b}`);
}
else if(oper=='/'){
  document.write(`The Division of ${a} & ${b} is ${a/b}`,"<br>")
  document.write(` OR Approx. ~ ${Math.round(a/b)}`)
}
else {
  document.write('Not a valid choice!')
}
console.log({name1:'Kanu', age : 29})