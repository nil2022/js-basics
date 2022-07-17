/* Move all negative numbers to the end and positive to the beginning of the array without using any
predefined sorting method  */
const arr = [-1,2,-3,4,5,6,-7,8,9];
const n = arr.length;
const output = [];

function sortArray(arr) {
  for (let i = 0; i < n; i++) {
    if(arr[i]>=0){
      output.unshift(arr[i]);
    }
    else {
      output.push(arr[i]);
    }
  }
  return output;
}
console.log(sortArray(arr));