

const floydWarshall = (graph) => {
    const nodes = Object.keys(graph);
    const dist = {};

    for (let i of nodes) {
        dist[i] = {};
        for (let j of nodes) {
            dist[i][j] = i === j ? 0 : (graph[i][j] ?? Infinity);
        }
    }

    for (let k of nodes) {
        for (let i of nodes) {
            for (let j of nodes) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
};

const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

console.log("Floyd-Warshall:", floydWarshall(graph)["A"]);


