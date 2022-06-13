function uniqueElementSum(n, input) {
    let sum = 0;
     for(i=0;i<n;i++){
      for(j=i+1;j<n;j++){
        if(input[i]==input[j]){
          continue;
        } else {
          sum = input[i]+input[j];
        }
      }
    }
     return sum;
   }
   let arr = [1,2,3,4];
   let n = arr.length;
   console.log(uniqueElementSum(n, arr));