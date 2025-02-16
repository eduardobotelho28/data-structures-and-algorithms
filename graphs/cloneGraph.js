function cloneGraph (node) {

    if(!node) return node

    const queue  = []
    const clones = {}

    queue.push(node)
    clones[node.val] = new Node(node.val, [])

    while (queue.length) {
        const current_node = queue.shift()
        const current_clone = clones[current_node.val]

        for (const n of current_node.neighbors) {
            if(!(n.val in clones)) {
                clones[n.val] = new Node(n.val, [])
                queue.push(n)
            }

            current_clone.neighbors.push(clones[n.val])
            
        }

    }

    return clones[node.val]

}

cloneGraph ()