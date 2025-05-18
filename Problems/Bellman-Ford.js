

const bellmanFord = (graph, start) => {
    const distances = {};
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;

    const edges = [];
    for (let u in graph) {
        for (let v in graph[u]) {
            edges.push([u, v, graph[u][v]]);
        }
    }

    const V = Object.keys(graph).length;
    for (let i = 0; i < V - 1; i++) {
        for (let [u, v, weight] of edges) {
            if (distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
            }
        }
    }

    for (let [u, v, weight] of edges) {
        if (distances[u] + weight < distances[v]) {
            throw new Error("Graph contains a negative-weight cycle");
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

console.log("Bellman-Ford:", bellmanFord(graph, "A"));
