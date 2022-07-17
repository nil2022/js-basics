function isSorted(arr,i){
  
    if(i==arr.length-1){
      return true;
    }
     let value = isSorted(arr,i+1);
    return value && (arr[i]<arr[i+1]);
     
  }
  let arr = [1,2,3];
  console.log(isSorted(arr,0));