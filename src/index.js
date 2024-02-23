import { hashmap } from "./hashmap";
import  mergeSort  from "./mergeSort";
import { 
  buildTree, 
  insertNode, 
  find, 
  deleteNode, 
  levelOrder, 
  preOrder ,
  inOrder,
  postOrder,
  height,
  depth,
  isBalanced,
  reBalance
} from "./BST";

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

function printAll(r) {
  console.log(inOrder(r));
  console.log(preOrder(r));
  console.log(postOrder(r));
}
function check(root) {
  isBalanced(root) == false ? console.log('unbalanced') : console.log('balanced');
}

let array = [54,12,8,3,1,90,32];
let root = buildTree(array).makeBST();
console.log(root);
prettyPrint(root);
check(root);
printAll(root)
root = insertNode(root, 5);
root = insertNode(root, 16);
root = insertNode(root, 4);
prettyPrint(root);
check(root);
let reBal = reBalance(root);
printAll(reBal);
prettyPrint(reBal)
check(reBal);





