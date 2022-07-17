const add = (a, b, c) => {
    return a + b + c;
  }
  
  const curryAdd = (sum) => {
    return (a) => {
      console.log('inside a',a);
     return (b) => {
       console.log('inside b',a,b);
      return (c) => {
        console.log('inside c',a,b,c);
        return a+b+c;
          }
        }
      }
  }
  
  const addition = curryAdd(add);
  console.log(addition(1)(2)(3));
  console.log(add(1,2,3));