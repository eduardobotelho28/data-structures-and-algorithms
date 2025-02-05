function Node (value) {
    this.value = value
    this.next = null
    this.prev = null
}

function LinkedList () {
    this.head = null
    this.tail = null
}

//add to front.
LinkedList.prototype.prepend = function (value) { 

    const newNode = new Node(value)
    newNode.next = this.head

    if(this.head) {
        this.head.prev = newNode
    }

    else {
        this.tail = newNode
    }

    this.head = newNode;
};

//add to end.
LinkedList.prototype.append = function (value) { 

    const newNode = new Node(value)
    newNode.prev = this.tail

    if(this.tail) 
        this.tail.next = newNode
    
    else 
        this.head = newNode

    this.tail = newNode;
};


LinkedList.prototype.remove_from_front = function () { 

    if(!this.head) {
        return null
    }

    removed_value = this.head.value 

    this.head = this.head.next
    if(this.head) 
        this.head.prev = null
    else 
        this.tail = null

    return removed_value
};

LinkedList.prototype.remove_from_end = function () { 

    if(!this.tail) {
        return null
    }

    removed_value = this.tail.value 

    this.tail = this.tail.prev
    if(this.tail) 
        this.tail.prev = null
    else 
        this.head = null

    return removed_value
};

// Exemplo de uso
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);

console.log(list.remove_from_front())
console.log(list.remove_from_end())