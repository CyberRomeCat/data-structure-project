class Node {
    constructor(key,value) {
        this.key = key;
        this.value = value;
    }
}

function HashMap() {
    let list = [];
    for(let i = 0; i < 15; i++) {
        let b;
        list.push(b);
    }  

    const hash = (key) => {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
          hashCode += key.charCodeAt(i);
        }
      
       return hashCode % 16;
    }

    const loadFactor = () => {
       let bucketFull = 0;
       let loadFactor = .75 * list.length + 1
       for(let i = 0; i < list.length; i++) {
            if (list[i] !== undefined) {
               bucketFull += 1;
            }
        }
        if (bucketFull >= loadFactor) {
            for(let i = 0; i < 16; i++) {
                let b;
                list.push(b);
            }  
        }
    }

    const set = (key, value) => {
       for(let i = 0; i < list.length; i++) {
            if (list[i] == undefined) {
                list[i] = new Node(key, value)
                break;
            }
        }
        loadFactor();
    }

    const get = (key) => {
        return list[hash(key) - 1].value;
    }

    const has = (keyt) => {
        for(let i = 0; i < list.length; i++) {
            if (list[i] !== undefined) {
                if (list[i].key === keyt) {
                    return true;
                } 
            }
        }
        return false;
    }

    const remove = (key) => {
        for(let i = 0; i < list.length; i++) {
            if (list[i] !== undefined) {
                if (list[i].key === key) {
                    list[i] = undefined;
                    return true;
                }
            }
        }
        return false;
    }

    const length = () => {
        let keys = 0;
        list.forEach(b => {
            if(b != undefined) {
                keys += 1;
            }
        })
        return keys;
    }

    const clear = () => {
        list.forEach(b => {
          b = undefined;
        })
        console.log(list);
    }

    const keys = () => {
        let allkeys = [];
        list.forEach(b => {
            if(b != undefined) {
               allkeys.push(b.key);
            }
        })
        return allkeys;
    }

    const values = () => {
        let allValues = [];
        list.forEach(b => {
            if(b != undefined) {
               allValues.push(b.value);
            }
        })
        return allValues;
    }

    const entries = () => {
        let keyValue = [];
        list.forEach(b => {
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