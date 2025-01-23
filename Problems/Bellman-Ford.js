

const bellmanFord = (graph, start, vertices) => {
    const distances = {};
    const edges = [];

    for (let vertex of vertices) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;

    for (let [u, neighbors] of Object.entries(graph)) {
        for (let [v, weight] of Object.entries(neighbors)) {
            edges.push([u, v, weight]);
        }
    }

    for (let i = 0; i < vertices.length - 1; i++) {
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
    A: { B: -1, C: 4 },
    B: { C: 3, D: 2, E: 2 },
    C: {},
    D: { B: 1, C: 5 },
    E: { D: -3 }
};

const vertices = ["A", "B", "C", "D", "E"];
const startNode = "A";

try {
    const result = bellmanFord(graph, startNode, vertices);
    console.log(`Shortest distances from ${startNode}:`, result);
} catch (error) {
    console.error(error.message);
}