function sort(arr){
    let n = arr.length;
    for(let i=0;i<n;i++){
      let ele = arr[i];
      for(let j=0;j<i;j++){
        if(arr[i+1]<arr[j]){
          arr[j] = arr[i+1];
        }
        arr[j+1]=ele;
        console.log(arr);
      }
    } return arr;
  }
  console.log(sort([5,4,1,0,6]));
  //                0 1 2 3 4