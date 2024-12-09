

const dfsRecursive = (graph, start, visited = new Set()) => {
    visited.add(start);
    console.log(start);

    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
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

console.log("DFS (Recursive):");
dfsRecursive(graph, "A");