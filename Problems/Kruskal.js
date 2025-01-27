

class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = Array(size).fill(0);
    }

    find(u) {
        if (this.parent[u] !== u) {
            this.parent[u] = this.find(this.parent[u]); // مسیر فشرده‌سازی
        }
        return this.parent[u];
    }

    union(u, v) {
        const rootU = this.find(u);
        const rootV = this.find(v);

        if (rootU !== rootV) {
            if (this.rank[rootU] > this.rank[rootV]) {
                this.parent[rootV] = rootU;
            } else if (this.rank[rootU] < this.rank[rootV]) {
                this.parent[rootU] = rootV;
            } else {
                this.parent[rootV] = rootU;
                this.rank[rootU]++;
            }
        }
    }
}

const kruskalMST = (edges, V) => {
    edges.sort((a, b) => a[2] - b[2]); // مرتب‌سازی یال‌ها بر اساس وزن

    const unionFind = new UnionFind(V);
    const mst = [];

    for (const [u, v, weight] of edges) {
        if (unionFind.find(u) !== unionFind.find(v)) {
            unionFind.union(u, v);
            mst.push([u, v, weight]);
        }
    }

    return mst;
};