var number = 19;
var isPrime= true;
if(number<=1)
{
    console.log(`${number} is not a prime number`);
} else 
{   
    for(i=2;i<number;i++)
    {
        if(number%i==0)
        {
        isPrime= false;
            break;
        }
    }
    isPrime? console.log(`${number} is a prime number`) 
        :console.log(`${number} is not a prime number`)
}

