import { LinkedList } from "./linked-list";

class NodePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

function hashmap() {
    let allBuckets = [];
    let addBucket = (size) => { 
        for (let i = 0; i < size; i++) {
            let bucket = null;
            allBuckets.push(bucket);
        }
    }
    addBucket(16);

    const hash = (key) => {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
      
        return hashCode % allBuckets.length;
      }

    const resize = () => {
        const allNodes = allBuckets.filter(b => b != null);
        const oldIndexes = [];
        allNodes.forEach(b => {
            let key = b.head.value.key; 
            oldIndexes.push([key, hash(key)]);
        });
        addBucket(allBuckets.length);
        allNodes.forEach(b => {
            let key = b.head.value.key; 
            oldIndexes.forEach(e => {
                if (e[0] == key) {
                    allBuckets[e[1]] = null;
                }
            });
            let newIndex = hash(key);
            allBuckets[newIndex] = b;
        });
    }

    const filledBuckets = () => {
        let filledBucket = 0;
        allBuckets.forEach(bucket => {
            if (bucket != null) {
                filledBucket += 1
            };
        });
        return filledBucket
    }

    const checkLoadFactor = () => {
        let loadfactor = 0.75 * allBuckets.length;
        if (filledBuckets() >= loadfactor) {
            resize();
        }
    }

    let filterNodes = () => { return allBuckets.filter(b => b != null) }

    const overWriteValue = (key, value) => {
        filterNodes().forEach(b => {
            if(b.contains(key) == true) {
                b.changeValue(key,value);
                return true;
            };
        })
    }

    const set = (key, value) => {
        if(overWriteValue(key, value) != true) {
            let index = hash(key);
            if (index < 0 || index >= allBuckets.length) {
                throw new Error("Trying to access index out of bound");
            } 
            let linkedlist = new LinkedList;
            allBuckets[index] = linkedlist;
            if (allBuckets[index].head == null) {
                allBuckets[index].prepend(new NodePair(key, value))
            } else {
                allBuckets[index].append(new NodePair(key, value));
            }
            checkLoadFactor();
        }
    }

    const get = (key) => {
        let index = hash(key);
        if (allBuckets[index] == null) return null;
        let node = allBuckets[index].head
        while (allBuckets[index].head != null) {
            if (node.value.key == key) {
                return node.value.value;
            }
            node = node.next;
        }
        return null;
    }

    const has = (key) => {
        let index = hash(key);
        if (allBuckets[index] == null) return false;
        let node = allBuckets[index].head;
        while (allBuckets[index].head != null) {
            if (node.value.key == key) {
                return true;
            }
            node = node.next;
        }
    }

    const remove = (key) => {
        let index = hash(key);
        if (allBuckets[index] == null) return false;
        let node = allBuckets[index].head;
        if (node.value.key == key) {
            allBuckets[index] = null;
            return true
        } else {
            while (allBuckets[index].head != null) {
                if (node.value.key == key) {
                    node = null;
                    return true;
                }
                node = node.next;
            }
        }
    }

    const length = () => {
        return filledBuckets();
    }

    const clear = () => {
        allBuckets = [];
        addBucket(16);
        console.log(allBuckets);  
    }

    const keys = () => {
        const allKeys = []
        filterNodes().forEach(b => {
            let node = b.head;
            while (node != null) {
                if (node.value.key) {     
                   allKeys.push(node.value.key);
                }
                node = node.next;
            }
        });
        return allKeys
    }

    const values = () => {
        const allValues = []
        filterNodes().forEach(b => {
            let node = b.head;
            while (node != null) {
                if (node.value.value) {     
                   allValues.push(node.value.value);
                }
                node = node.next;
            }
        });
        return allValues;
    }

    const entries = () => {
        const allKeyValue = [];
        filterNodes().forEach(b => {
            let node = b.head;
            while (node != null) {
                if (node.value.key) {     
                   allKeyValue.push([node.value.key, node.value.value]);
                }
                node = node.next;
            }
        });
        return allKeyValue;
    }

    return {set, get, has, remove, length, clear, keys, values, entries, allBuckets}
}

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

export { hashmap }