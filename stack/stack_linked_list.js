function Node (value) {
    this.value = value
    this.next = null
}

function Stack () {
    this.top = null
    this.size = 0
}

Stack.prototype.push = function (item) {
    const new_node = new Node(item)
    new_node.next  = this.top
    this.top       = new_node
    this.size++
}

Stack.prototype.pop = function () {
    if(!this.top) 
        return "error:empty stack"

    const popped_node = this.top
    this.top = popped_node.next
    this.size--
    return popped_node.value
}

Stack.prototype.peek = function () {
    if(!this.top) 
        return "error:empty stack"

    return this.top.value
}

Stack.prototype.stack_size = function () {
    return this.size
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.pop()) //3
console.log(stack.peek()) // 2
console.log(stack.stack_size()) // 2
// console.log(stack.is_empty())

console.log(stack.pop()) //2
console.log(stack.pop()) // 1
console.log(stack.pop()) // erro
