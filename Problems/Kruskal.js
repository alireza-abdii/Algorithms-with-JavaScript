

class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = Array(size).fill(0);
    }

    find(u) {
        if (this.parent[u] !== u) {
            this.parent[u] = this.find(this.parent[u]);
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
    edges.sort((a, b) => a[2] - b[2]); 
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

const edges = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 2, 3],
    [1, 3, 8],
    [1, 4, 5],
    [2, 4, 7],
    [3, 4, 9]
];

const V = 5; 
console.log("Edges in MST using Kruskal:");
console.table(kruskalMST(edges, V));