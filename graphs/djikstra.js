function djikstra(graph, start) {
    const queue = [[0, start]];
    const distances = {};

    for (const node in graph) {
        distances[node] = Infinity;
    }

    distances[start] = 0;

    while (queue.length) {
        let [current_distance, current_node] = queue.shift();

        if(current_distance > distances[current_node])
            continue
        
        for (const neighbors of graph[current_node]) {
            let [neighbor, weight] = neighbors;
            let distance = current_distance + weight;

            if(distance < distances[neighbor]) {
                distances[neighbor] = distance;
                queue.push([distance, neighbor])
            }
            
        }
    }

    return distances;
}

graph = {
    'A': [['B', 1], ['C', 4]],
    'B': [['A', 1], ['C', 2], ['D', 5]],
    'C': [['A', 4], ['B', 2], ['D', 1]],
    'D': [['B', 5], ['C', 1]]
};

console.log(djikstra(graph, 'A'));
