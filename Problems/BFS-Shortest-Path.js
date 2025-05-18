

const bfsShortestPath = (graph, start) => {
    const distances = {};
    const queue = [start];
    distances[start] = 0;

    while (queue.length > 0) {
        const current = queue.shift();
        for (let neighbor in graph[current]) {
            if (!(neighbor in distances)) {
                distances[neighbor] = distances[current] + 1;
                queue.push(neighbor);
            }
        }
    }

    return distances;
};

const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

console.log("BFS (unweighted):", bfsShortestPath(graph, "A"));
