let arr = [];
function fibo(n) {
  let res = 0;
  //base case
  if (n == 0 || n == 1) {
    return n;
  }
    let res1 = fibo(n - 1); //recursive call
    let res2 = fibo(n - 2); //recursive call

   res = res1 + res2; //self work
  
  //console.log(res);
  return res;
}
for(i=0;i<10;i++){
  arr.push(fibo(i));  
}
console.log(arr);


// 0 1 1 2 3 5 8 13 
// 0 1 2 3 4 5 6 7