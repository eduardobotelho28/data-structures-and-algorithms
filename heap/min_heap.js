function MinHeap () {
    this.heap = []
}

MinHeap.prototype.left_child = function (index) {
    return 2 * index + 1
}

MinHeap.prototype.right_child = function (index) {
    return 2 * index + 2
}

MinHeap.prototype.parent = function (index) {
    return Math.floor((index - 1) / 2)
}

MinHeap.prototype.heapify_up = function (index) {
    if(index == 0)
        return

    let parent_index = this.parent(index)

    if(this.heap[index] < this.heap[parent_index]) {
        [ this.heap[index], this.heap[parent_index] ] = [ this.heap[parent_index], this.heap[index] ] // swap

        this.heapify_up(parent_index)
    }
    
}

MinHeap.prototype.heapify_down = function (index) {
    
    let size  = this.heap.length

    let left  = this.left_child (index)
    let right = this.right_child(index)

    let smallest = index

    if(left < size && this.heap[left] < this.heap[smallest]) {
        smallest = left
    }
    if(right < size && this.heap[right] < this.heap[smallest]) {
        smallest = right
    }

    if(smallest != index) {
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]] 

        this.heapify_down(smallest)
    }

}

MinHeap.prototype.insert = function (value) {
    this.heap.push(value)
    this.heapify_up(this.heap.length - 1)
}

MinHeap.prototype.pop_min = function () {
    if(this.heap.length === 0)
        return "empty heap"

    if(this.heap.length === 1)
        return this.heap.shift()

    let root = this.heap[0]

    this.heap[0] = this.heap.pop()

    this.heapify_down(0)

    return root
}

let heap = new MinHeap()
    
heap.insert(0)
heap.insert(1)
heap.insert(2)
heap.insert(3)
heap.insert(4)
heap.insert(5)
heap.insert(0)

console.log("Heap atual:", heap.heap) 

