/* Write a function to find if 2 nos. have opposite signs or not */
function oppNUM(num1,num2)
{
  if(typeof(num1)!='number' || typeof(num2)!='number')
    {
      console.log(`These are not comparable`);
    }
  else if(num1<0 && num2>0)
    		 {
           return true;           
         }
  else if(num2<0 && num1>0)
    		 {
           return true;
         }
  else
  		{
        return false;
      }
}
oppNUM(6,6)?console.log(`Numbers are opposite signs`):console.log(`Numbers have same signs`);