function Node (data) {
    this.data = data
    this.left = null
    this.right = null
}

function Binary_tree () {
    this.root = null
}

Binary_tree.prototype.insert = function (data) {

    //ainda não tem root?? (então cria o root com os dados)
    if(!this.root) {
        this.root = new Node(data)
    }

    else {
        this.insert_recusive(data, this.root)
    }

}

Binary_tree.prototype.insert_recusive = function (data, node) {

    //se for menor, insere a esquerda.
    if(data < node.data) {
        if(!node.left) 
            node.left = new Node(data)
        else 
            this.insert_recusive(data,node.left)
    }

    //se for maior, insere a direita. 
    if(data > node.data) {
        if(!node.right) 
            node.right = new Node(data)
        else  
            this.insert_recusive(data, node.right)
    }

}

Binary_tree.prototype.search = function (data) {
    return this.search_recursive (this.root, data)
}

Binary_tree.prototype.search_recursive = function (node, data) {

    if(!node) return false

    if (node.data == data) return true

    if(data < node.data) return this.search_recursive(node.left, data)

    if(data > node.data) return this.search_recursive(node.right, data)

}   

// Testando a árvore
const tree = new Binary_tree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);
tree.insert(3);

console.log(tree.search(7));  // true
console.log(tree.search(12)); // false