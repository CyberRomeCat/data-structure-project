class LinkedList {
    head = null;
    tail = null;

    prepend(value) {
       if (this.head === null) {
        this.head = new node(value);
       } else {
        let nextValue = this.head;
        if (nextValue.next == null) {
            this.tail = nextValue;
        }
        this.head = new node(value, nextValue);
       }
    }

    append(value) {
        if (this.head == null) {
            prepend(value);
        }
        else if(this.tail !== null) {
            this.tail.next = new node(value);
            this.tail = new node(value);
        }  else {
            this.tail = new node(value);
        }
    }

    size() {
        let size = 0;
        let node = this.head;
        while (this.head != null) {
            node = node.next;
            size++;
            if (node.next == null) {
                size++;
                break;
            }
        }
        return size;   
    }

    at(index) {
        let size = 0;
        let node = this.head;
        while (this.head != null) {
            node = node.next;
            size++;
            if (size === index) {
                return node;
            }
        }
    }

    pop() {
       let node = this.head;
       while (this.head != null) {
        if (node.next.value === this.tail.value) {
            node.next = null;
            this.tail = node;
            break;
        } 
           node = node.next;
       }  
    }

    contains(value) {
        let node = this.head;
        while (this.head != null) {
            if (node.value == value) {
                console.log(true);
                break;
            } 

            if (node.next == null) {
                return false;
            }
            node = node.next;
        }
    }

    find(value) {
        let index = 0;
        let node = this.head;
        while (this.head != null) {
            if (node.value == value) {
                console.log(index);
                break;
            } 

            if (node.next == null) {
                return null;
            }
            node = node.next;
            index++;
        }
    }

    toString() {
        let string = `${this.head.value}`;
        let node = this.head;
        while (this.head != null) {
            node = node.next;
            if (node === null) {
                string += '-> '+ null;
                return string;

            }
            string += ' -> '+ node.value
        }
    }
}

class node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

let list = new LinkedList;
list.prepend('string');
list.prepend('love');
list.prepend('awesome')
list.toString();