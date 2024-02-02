class Node {
    constructor(key,value) {
        this.key = key;
        this.value = value;
    }
}

function HashMap() {
    let allBuckets = [];
    for(let i = 0; i < 15; i++) {
        let b;
        allBuckets.push(b);
    }  

    const hash = (key) => {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % 16;
    }

    const resize = () => {
       let bucketFull = 0;
       let loadFactor = .75 * allBuckets.length + 1
       for(let i = 0; i < allBuckets.length; i++) {
            if (allBuckets[i] !== undefined) {
               bucketFull += 1;
            }
        }
        if (bucketFull >= loadFactor) {
            for(let i = 0; i < 16; i++) {
                let b;
                allBuckets.push(b);
            }  
        }
    }

    const set = (key, value) => {
        if (key < 0 || key >= allBuckets.length) {
            throw new Error("Trying to access index out of bound");
        }
       for(let i = 0; i < allBuckets.length; i++) {
            if (allBuckets[i] == undefined) {
                allBuckets[i] = new Node(key, value)
                break;
            }
        }
        resize();
    }

    const get = (key) => {
        if (allBuckets[key == null]) {
            return null;
        }
        return allBuckets[hash(key)-1].value;
    }

    const has = (keyt) => {
        for(let i = 0; i < allBuckets.length; i++) {
            if (allBuckets[i] !== undefined) {
                if (allBuckets[i].key === keyt) {
                    return true;
                } 
            }
        }
        return false;
    }

    const remove = (key) => {
        for(let i = 0; i < allBuckets.length; i++) {
            if (allBuckets[i] !== undefined) {
                if (allBuckets[i].key === key) {
                    allBuckets[i] = undefined;
                    return true;
                }
            }
        }
        return false;
    }

    const length = () => {
        let keys = 0;
        allBuckets.forEach(b => {
            if(b != undefined) {
                keys += 1;
            }
        })
        return keys;
    }

    const clear = () => {
        allBuckets.forEach(b => {
          b = undefined;
        })
        console.log(allBuckets);
    }

    const keys = () => {
        let allkeys = [];
        allBuckets.forEach(b => {
            if(b != undefined) {
               allkeys.push(b.key);
            }
        })
        return allkeys;
    }

    const values = () => {
        let allValues = [];
        allBuckets.forEach(b => {
            if(b != undefined) {
               allValues.push(b.value);
            }
        })
        return allValues;
    }

    const entries = () => {
        let keyValue = [];
        allBuckets.forEach(b => {
            if(b != undefined) {
               keyValue.push([b.key, b.value])
            }
        })
        return keyValue;
    }

    return {
        hash,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries
    }
}

let map = HashMap();
map.set('a', 'doll');
map.set('b', 'aoll');
map.set('c', 'soll');
map.set('d', 'foll');
map.set('e', 'goll');
map.set('f', 'holl');
map.set('g', 'joll');
map.set('h', 'loll');
map.set('i', 'koll');
map.set('j', 'qoll');
map.set('k', 'eoll');
map.set('l', 'zoll');