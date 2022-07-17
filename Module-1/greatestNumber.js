/* Write a function that compares two numbers 
and returns the larger of the two */
function greaterNUM(num1,num2)
{
  if(typeof(num1)!='number' || typeof(num2)!='number')
    {
      console.log(`These are not comparable`);
    }
  else if(num1>num2)
    {
      console.log(`${num1} is Greatest`);
    }
  else if(num2>num1)
    {
      console.log(`${num2} is Greatest`);
    }
  else {
          console.log(`Numbers are equal`);
       }
  
}
greaterNUM(3,5);
