let twoSum = function(nums, target) {
    let n = nums.length, out = [];
    for(i=0;i<n;i++) {
      for(j=i+1;j<n;j++) {
        if(nums[i]+nums[j]==target) {
          out.push(i,j);
        }
      }
    } return out;
  };
  
  arr = [2,9,5,15];
  target = 17;
  console.log(twoSum(arr,target));