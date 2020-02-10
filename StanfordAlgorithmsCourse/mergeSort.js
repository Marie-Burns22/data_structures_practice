// Assumptions - all integers, no repeated integers

// both arrays passed into merge must already be sorted
function merge(arrA, arrB){
    let c = [];
    let i = 0; //counter for subarry a;
    let j = 0; // counter for subarray b;
    while (i < arrA.length && j < arrB.length){
        if (arrA[i] < arrB[j]) {
            c.push(arrA[i]);
            i++;
        } else {
            c.push(arrB[j]);
            j++;
        }
    }

    while (i < arrA.length) {
        c.push(arrA[i]);
        i++;
    }

    while (j < arrB.length) {
        c.push(arrB[j]);
        j++;
    }
   return c;
}


function mergeSort(array){
    if (array.length <= 1) return array;
    let half = Math.floor(array.length / 2);
    let a = mergeSort(array.slice(0, half))
    let b = mergeSort(array.slice(half));
    return merge(a, b);
}
console.log(mergeSort([4, 9, 2, 0, 11, 12]))