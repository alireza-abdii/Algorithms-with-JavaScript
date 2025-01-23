

const bellmanFord = (graph, start, vertices) => {
    const distances = {};
    const edges = [];

    // مقداردهی اولیه فاصله‌ها
    for (let vertex of vertices) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;

    // تبدیل گراف به لیستی از یال‌ها
    for (let [u, neighbors] of Object.entries(graph)) {
        for (let [v, weight] of Object.entries(neighbors)) {
            edges.push([u, v, weight]);
        }
    }

    // الگوریتم اصلی
    for (let i = 0; i < vertices.length - 1; i++) {
        for (let [u, v, weight] of edges) {
            if (distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
            }
        }
    }

    // بررسی وجود دورهای وزن منفی
    for (let [u, v, weight] of edges) {
        if (distances[u] + weight < distances[v]) {
            throw new Error("Graph contains a negative-weight cycle");
        }
    }

    return distances;
};