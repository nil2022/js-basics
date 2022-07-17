function triplet(arr, lengthOfArray) {
    arr.sort((a, b) => a - b);  //sort the array

    for (let i = 0; i <= lengthOfArray-1; i++) {
        let left = i + 1; //leftmost element in array
        let right = lengthOfArray - 1; //rightmost element in array
        let check = arr[i]; //take currect ith position element in check

        while (left <= right) {

            if (check + arr[left] + arr[right] == 0) // check whether sum of 3 elements is zero
            {
                console.log(check, arr[left], arr[right])  //print 3 elements which sums to zero
                left++;  //move from left to right
                right--; //move from right to left
            }

            else if (check + arr[left] + arr[right] < 0)
                left--;

            else {
                right--;
            }
            
        }
    }
    return;
}
let arr = [1,  2, 3, -4, -2, 1, 0, -3];
triplet(arr, arr.length);