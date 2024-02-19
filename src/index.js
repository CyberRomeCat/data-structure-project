import { hashmap } from "./hashmap";
import  mergeSort  from "./mergeSort";
import { buildTree } from "./BST";

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
console.log(mergeSort(arr))
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

  prettyPrint(tree.makeBST(0,n));

  console.log('working')
