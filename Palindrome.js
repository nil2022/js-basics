// Program to print all the palindromes under 50
function isPalindrome(num)
{
  let rev = 0;
  let temp = num;
  while(num>0)
  {
    rev = rev*10 + parseInt(num%10);
    num = parseInt(num/10);
  }
    return temp == rev;
}
for(var i=1;i<50;i++)
{
  if(isPalindrome(i) == true)
  {
    console.log(i)
  }
}
