

const floydWarshall = (graph) => {
    const V = graph.length;
    const dist = Array.from({ length: V }, (_, i) =>
        Array.from({ length: V }, (_, j) => graph[i][j])
    );

    for (let k = 0; k < V; k++) {
        for (let i = 0; i < V; i++) {
            for (let j = 0; j < V; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
};

const INF = Infinity;

const graph = [
    [0, 3, INF, 7],
    [8, 0, 2, INF],
    [5, INF, 0, 1],
    [2, INF, INF, 0],
];

const result = floydWarshall(graph);
console.log("Shortest distances between every pair of vertices:");
result.forEach(row => console.log(row));