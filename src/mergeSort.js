function checkSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        let nextEl = arr[i + 1]
        if (arr[i] > nextEl) {
            return false;
        }
    }             
}

function merge(leftH,rightH) {
    let sortedArr = [];
    if (leftH[0] <= rightH[0]) {
        sortedArr.push(leftH[0]);
        leftH.shift();
        return sortedArr.concat(merge(leftH,rightH))
    } else if(leftH.length === 0) {
        return sortedArr.concat(rightH);
    } else if (rightH.length === 0 ) {
        return sortedArr.concat(leftH);
    }  else {
        sortedArr.push(rightH[0]);
        rightH.shift();
        return sortedArr.concat(merge(leftH,rightH))
    }
}

function mergeSort(arr) { 
    let half = Math.ceil(arr.length / 2);
    let leftHalf = arr.slice(0, half);
    let rightHalf = arr.slice(half)
    if (checkSorted(leftHalf) === false && 
        checkSorted(rightHalf) === false) {
        leftHalf = mergeSort(leftHalf);
        rightHalf = mergeSort(rightHalf);
        return merge(leftHalf, rightHalf)
    } else if(checkSorted(leftHalf) === false) {
        leftHalf = mergeSort(leftHalf);
        return merge(leftHalf,rightHalf);
    } else if(checkSorted(rightHalf) === false) {
        rightHalf = mergeSort(leftHalf,rightHalf);
        return merge(leftHalf, rightHalf);
    } else {
        return merge(leftHalf,rightHalf);
    }
}