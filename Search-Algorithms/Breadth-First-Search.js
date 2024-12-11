

const bfs = (graph, start) => {
    const queue = [start];
    const visited = new Set();

    while (queue.length > 0) {
        const node = queue.shift();

        if (!visited.has(node)) {
            visited.add(node);
            console.log(node);

            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }
}

const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};

console.log("BFS:");
bfs(graph, "A");