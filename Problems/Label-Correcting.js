

const labelCorrecting = (graph, start) => {
    const distances = {};
    const inQueue = {};
    const queue = [];

    for (let node in graph) {
        distances[node] = Infinity;
        inQueue[node] = false;
    }

    distances[start] = 0;
    queue.push(start);
    inQueue[start] = true;

    while (queue.length > 0) {
        const u = queue.shift();
        inQueue[u] = false;

        for (let v in graph[u]) {
            const weight = graph[u][v];
            if (distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
                if (!inQueue[v]) {
                    queue.push(v);
                    inQueue[v] = true;
                }
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

console.log("Label Correcting:", labelCorrecting(graph, "A"));
