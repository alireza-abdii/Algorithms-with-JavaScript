

const primMST = (graph) => {
    const V = graph.length;
    const key = Array(V).fill(Infinity); // وزن کمترین یال برای رسیدن به گره
    const parent = Array(V).fill(null); // ذخیره والد هر گره
    const inMST = Array(V).fill(false); // وضعیت حضور گره در MST

    key[0] = 0; // شروع از رأس 0
    parent[0] = -1;

    for (let count = 0; count < V - 1; count++) {
        let u = -1;
        let minKey = Infinity;

        for (let v = 0; v < V; v++) {
            if (!inMST[v] && key[v] < minKey) {
                minKey = key[v];
                u = v;
            }
        }

        inMST[u] = true;

        for (let v = 0; v < V; v++) {
            if (graph[u][v] && !inMST[v] && graph[u][v] < key[v]) {
                key[v] = graph[u][v];
                parent[v] = u;
            }
        }
    }

    const mst = [];
    for (let i = 1; i < V; i++) {
        mst.push([parent[i], i, graph[i][parent[i]]]);
    }
    return mst;
};