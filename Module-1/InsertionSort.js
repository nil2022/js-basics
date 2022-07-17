function insertionSort(arr){
    let n = arr.length;
    for(let i=1;i<n;i++){
        let elem = arr[i];
        let j = i-1;

        while (j>=0 && elem < arr[j]) {
            arr[j+1] = arr[j];
            j--;
        }
        
        arr[j+1] = elem;
        console.log(arr);
    }
    return arr;
}
let arr = ['India','Australia','China','Russia','Brazil','Japan'];
insertionSort(arr);