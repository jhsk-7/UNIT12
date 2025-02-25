function bubbleSort(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++){
        let swapped = false;
        for (let j = 0; j < arr.length - i; j++) {
            count++
            if (arr[j] > arr[j+1]) {
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                swapped = true;
            }
        }
        if (!swapped){
            break;
        }
    }
    console.log(count)
    return arr
}



function merge(arr1, arr2) {
    newArr = []
    let j = 0
    let k = 0

    while (j < arr1.length && k < arr2.length) {
        if (arr1[j] < arr2[k]) {
            newArr.push(arr1[j])
            j++
        }
        else {
            newArr.push(arr2[k])
            k++
        }
    }
    while(j < arr1.length) {
        newArr.push(arr1[j]);
        j++;
    }
    while(k < arr2.length) {
        newArr.push(arr2[k]);
        k++;
    }
    return newArr
}


function mergeSort (arr) {
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let right = arr[i];
        let left = i - 1;

        while (left > -1 && right < arr[left]) {
            arr[left + 1] = arr[left];
            left--;
        }
        arr[left + 1] = right;
    }
    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}


//Source: https://nkugwamarkwilliam.medium.com/quick-sort-made-easy-in-javascript-60642f8f42f
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }
  
  function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIndex++;
        [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
      }
    }
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    return swapIndex;
  }



function radixSort(arr) {
    let maxDigits = 0;
    
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, getNumberOfDigits(arr[i]))
    }

    for (let i = 0; i < maxDigits; i++) {
        let buckets = Array.from({length: 10}, () => []);
    
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j]);
        }

        arr = [].concat(...buckets);
    }

    return arr;
}

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function getNumberOfDigits(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}