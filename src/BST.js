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

function inorder(root) {
    if (root !== null) {
      inorder(root.left);
      console.log(root.data);
      inorder(root.right);
    }
}
   

function insertNode(node, key) {
    if (node === null) {
        return new Node(key);
    }

    if (key < node.data) {
        node.left = insertNode(node.left, key);
    } else {
        node.right = insertNode(node.right, key);
    }

    return node;
}
   
function deleteNode(root, k) {
    if (root === null) {
        return root;
    }

    if (root.data > k) {
        root.left = deleteNode(root.left, k);
        return root;
    } else if (root.data < k) {
        root.right = deleteNode(root.right, k);
        return root;
    }

    if (root.left === null) {
            let temp = root.right;
            root = null;
            return temp;
    } else if (root.right === null) {
            let temp = root.left;
            root = null;
            return temp;
    }

    else {
        let succParent = root;

        let succ = root.right;
        while (succ.left !== null) {
            succParent = succ;
            succ = succ.left;
        }

        if (succParent !== root) {
            succParent.left = succ.right;
        } else {
            succParent.right = succ.right;
        }

        root.data = succ.data;

        succ = null;
        return root;
    }
}

function find(root, value) {
    if (root === null) {
        console.log(root)
        return root;
    } 
    if (root.data == value) {
        console.log(root);
        return root;
    }

    if (value < root.data) {
        root.left = find(root.left, value);
    } else {
        root.right = find(root.right, value);
    }
}


export { buildTree, deleteNode, insertNode, find, inorder }
