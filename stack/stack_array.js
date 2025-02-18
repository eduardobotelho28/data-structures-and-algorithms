function Stack (max_length) {
    this.max_length = max_length 
    this.items = new Array(this.max_length).fill(0)
    this.pointer = 0
}

Stack.prototype.push = function (item) {
     
    if(this.pointer >= this.max_length)
        return "overflow error"

    this.items[this.pointer] = item
    this.pointer ++
}

Stack.prototype.pop = function () {
    if(this.pointer === 0)
        return false
    this.pointer =-1
    return this.items[this.pointer]
}

Stack.prototype.peek = function () {
    if(this.pointer === 0)
        return false

    return this.items[this.pointer]
}

Stack.prototype.size = function () {
    return this.pointer
}