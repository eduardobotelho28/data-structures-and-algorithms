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

Binary_tree.prototype.preorder_transversal = function () {
    const result = []
    this.preorder_recursive(this.root,result)
    return result
}

Binary_tree.prototype.preorder_recursive = function (node, result) {
    if(node) {
        result.push(node.data)
        this.preorder_recursive(node.left, result)
        this.preorder_recursive(node.right, result)
    }
}

Binary_tree.prototype.inorder_transversal = function () {
    const result = []
    this.inorder_recursive(this.root,result)
    return result
}

Binary_tree.prototype.inorder_recursive = function (node, result) {
    if(node) {
        this.inorder_recursive(node.left, result)
        result.push(node.data)
        this.inorder_recursive(node.right, result)
    }
}

Binary_tree.prototype.postorder_transversal = function () {
    const result = []
    this.postorder_recursive(this.root,result)
    return result
}

Binary_tree.prototype.postorder_recursive = function (node, result) {
    if(node) {
        this.postorder_recursive(node.left, result)
        this.postorder_recursive(node.right, result)
        result.push(node.data)
    }
}


// --------------------------------------------------------------------- //
// --------------------------------------------------------------------- // 

Binary_tree.prototype.dfs = function (data) {
    return this.dfs_recursive(data, this.root)
}

Binary_tree.prototype.dfs_recursive = function (data, node) {
    if(!node) 
        return false
    if(node.data == data) 
        return true
    if(this.dfs_recursive(data,node.left))
        return true
    if(this.dfs_recursive(data,node.right))
        return true
}

// Testando a árvore
const tree = new Binary_tree();
tree.insert(5);
tree.insert(3);
tree.insert(1);
tree.insert(10);
tree.insert(15);
tree.insert(7);

console.log(tree.dfs(11))
