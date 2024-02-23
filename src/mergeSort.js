function merge(leftH,rightH) {
    let sortedArr = [];
    if(leftH == undefined || leftH.length == 0 ) {
        return sortedArr.concat(rightH);
    }
    if (rightH == undefined || rightH.length === 0) {
        return sortedArr.concat(leftH);
    } 
    if (leftH[0] <= rightH[0]) {
        sortedArr.push(leftH[0]);
        leftH.shift();
        return sortedArr.concat(merge(leftH,rightH));
    } else {
        sortedArr.push(rightH[0]);
        rightH.shift();
        return sortedArr.concat(merge(leftH,rightH));
    }
}

function mergeSort(arr) { 
    if(arr.length == 1) return [arr[0]];
    let half = Math.ceil(arr.length / 2);
    let leftHalf = arr.slice(0, half);
    let rightHalf = arr.slice(half);
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

export default mergeSort