import mergeSort from "./mergeSort";

class Node {
    constructor(data) {
        this.data = data
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.array = array
        this.root = null;
    }
}

function buildTree(arr) {

    function cleanArr() {
        let removeDuplicate = [];

            arr.forEach(e => {
                if (removeDuplicate.includes(e) != true) {
                        removeDuplicate.push(e);
                }
            });

        return mergeSort(removeDuplicate);
    }

    let sortedArr = cleanArr();

    const makeBST = (start,end) => {
        let array = sortedArr;
        if (start > end) {
            return null;
        }

        let mid = parseInt((start + end) / 2);
        let node = new Node(array[mid]);
        node.left = makeBST(start, mid - 1);
        node.right = makeBST(mid + 1, end);
        return node;
    }

    return { makeBST, sortedArr, cleanArr }
}

export { buildTree }
