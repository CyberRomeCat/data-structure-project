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

function insertNode(root, value) {
    if (root === null) {
        return new Node(value);
    }

    if (value < root.data) {
        root.left = insertNode(root.left, value);
    } else {
        root.right = insertNode(root.right, value);
    }

    console.log(root);
    return root;
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
        console.log(root);
        return root;
    }
    if (root.data == value) {
        console.log(root);
        return root;
    }

    if (value < root.data) {
        return root.left = find(root.left, value);
    } else {
        return root.right = find(root.right, value);
    }
}

function levelOrder(root,callback) {
    if (root === null) return root;
    let q = [root];
    let values = [];
    while(q.length > 0) {
        let currentNode = q[0];
        console.log(q[0]);
        values.push(currentNode.data);
        if(typeof callback === 'function') callback(currentNode);
        if(currentNode.left != null) q.push(currentNode.left);
        if(currentNode.right != null) q.push(currentNode.right);
        q.shift();
    }
    if(typeof callback != 'function') {
        console.log(values);
        return values;
    }
}

function inOrder(root, callback) {
    if (root == null) return root;
    if(typeof callback != 'function') {
        let values = [];

        values = values.concat(inOrder(root.left));
        values.push(root.data);
        values = values.concat(inOrder(root.right));

        let filterValues = values.filter(v => v != null);
        return filterValues;
    }

    inOrder(root.left);
    callback(root);
    inOrder(root.right);
}

function preOrder(root, callback) {
    if (root == null) return root;
    if(typeof callback != 'function') {
        let values = [];

        values.push(root.data);
        values = values.concat(preOrder(root.left));
        values = values.concat(preOrder(root.right));

        let filterValues = values.filter(v => v != null);
        return filterValues;
    }

    callback(root);
    preOrder(root.left);
    preOrder(root.right);
}

function postOrder(root, callback) {
    if (root == null) return root;
    if(typeof callback != 'function') {
        let values = [];

        values = values.concat(postOrder(root.left));
        values = values.concat(postOrder(root.right));
        values.push(root.data);

        let filterValues = values.filter(v => v != null);
        return filterValues;
    }

    postOrder(root.left);
    postOrder(root.right);
    callback(root);
}

function height(root) {
    if(root == null) return null;
    let heightNum = 0;
    let children = [];

    if (root.left != null || root.right != null) {
        heightNum += 1;
        if(root.left != null) children.push(root.left);
        if(root.right != null) children.push(root.right);
        heightNum += height(children);
    }

    if (Array.isArray(root) == true) {
        let check = root.some(n => n.left != null || n.right != null);
        if(check == true) {
            heightNum += 1;
            root.forEach(n => {
                if (n.left != null) children.push(n.left);            
                if (n.right != null) children.push(n.right);           
            });
            heightNum += height(children);
        } else {
            return 0;
        }
    }

    return heightNum;
}

function depth(root, node) {
    if(root == null) return null;
    if(node == undefined) return 0;
    let depthNum = 0;
    let children = [];

    if (root.left != null || root.right != null) {
        depthNum += 1;
        if(root.left != null) children.push(root.left);
        if(root.right != null) children.push(root.right);
        depthNum += depth(children, node);
    }

    if (Array.isArray(root) == true) {
        let check = root.some(n => n.left != null || n.right != null);
        if(check == true) {
            depthNum += 1;
            for (let i = 0; i < root.length; i++) {
                let n = root[i];
                if(n.data == node) return 0;
                if (n.left != null) children.push(n.left);       
                if (n.right != null) children.push(n.right);
            }
            depthNum += depth(children, node);
        } else {
            return 0;
        }
    }

    return depthNum;
}

function isBalanced(root) {
    if (root == null) return root;
    if (root.left == null && root.right == null) return [0,0];
     
    let heightRoot = [0,0];

    if(root.left) heightRoot[0] += 1 + isBalanced(root.left)[0];
    if(root.right) heightRoot[1] += 1 + isBalanced(root.right)[1];
    if(root.left == null && root.right != null ) heightRoot[0] += 1 + isBalanced(root.left)[0];
    if(root.left != null && root.right == null ) heightRoot[1] += 1 + isBalanced(root.left)[1];

    let difference = heightRoot[0] - heightRoot[1];
    if(difference > 1 ){
        return false;
    }

    return heightRoot;
}



export { 
    buildTree, 
    deleteNode, 
    insertNode, 
    find, 
    inOrder, 
    levelOrder, 
    preOrder, 
    postOrder,
    height,
    depth,
    isBalanced
}
