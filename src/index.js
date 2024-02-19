import { hashmap } from "./hashmap";
import  mergeSort  from "./mergeSort";
import { buildTree, insertNode, find, inorder, deleteNode, levelOrder } from "./BST";

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let test = hashmap();
test.set('a','aoll');
test.set('b','boll');
test.set('c','coll');
test.set('d','doll');
test.set('e','eoll');
test.set('f','foll');
test.set('g','goll');
test.set('h','holl');
test.set('i','uoll');
test.set('j','joll');
test.set('k','koll');
test.set('l','loll');
test.set('m','aoll');
let arr = [12,2,65,7,9];
let n = arr.length;
let tree = buildTree(arr);
console.log(tree.makeBST(0,n));
console.log(mergeSort(arr));
prettyPrint(tree.makeBST(0,n));
let root = null;
root = insertNode(root, 50);
root = insertNode(root, 30);
root = insertNode(root, 20);
root = insertNode(root, 40);
root = insertNode(root, 70);
root = insertNode(root, 60);
inorder(root);
console.log(root);
prettyPrint(root);
deleteNode(root,50);
prettyPrint(root)
find(root,30)

