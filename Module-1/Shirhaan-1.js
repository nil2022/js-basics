let count = 0;

function merge(arr, start, mid, end) {
    let arr1 = arr.slice(start, mid+1);
    let arr2 = arr.slice(mid+1, end+1);

    let i = 0;
    let j =0;
    let k = start;
    
    while(i<arr1.length && j<arr2.length) {
        if(arr1[i] < arr2[j]) {
            arr[k] = arr1[i];
            i++;
        } else {
            arr[k] = arr2[j];
            count+= arr1.length-i;
            j++; 
        }
        k++;
    }

    while(i<arr1.length) {
        arr[k++] = arr1[i++];
    }

    while(j<arr2.length) {
        arr[k++] = arr2[j++];
    }

    return;
}

function mergeSort(arr, start, end) {

    if(start>=end) {
        return;
    }
    let mid = Math.floor((start+end)/2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid+1, end);

    return merge(arr, start, mid, end);
}

let arr = [5,6,3,2,8];
mergeSort(arr, 0, arr.length-1);
