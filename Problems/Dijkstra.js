

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node, distance) {
        this.heap.push({ node, distance });
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].distance >= this.heap[parentIndex].distance) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let smallest = index;

            if (leftIndex < length && this.heap[leftIndex].distance < this.heap[smallest].distance) {
                smallest = leftIndex;
            }
            if (rightIndex < length && this.heap[rightIndex].distance < this.heap[smallest].distance) {
                smallest = rightIndex;
            }
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

const dijkstra = (graph, start) => {
    const distances = {};
    const visited = {};
    const minHeap = new MinHeap();

    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    minHeap.insert(start, 0);

    while (!minHeap.isEmpty()) {
        const { node: currentNode, distance: currentDistance } = minHeap.extractMin();

        if (visited[currentNode]) continue;
        visited[currentNode] = true;

        for (let neighbor in graph[currentNode]) {
            const newDistance = currentDistance + graph[currentNode][neighbor];

            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                minHeap.insert(neighbor, newDistance);
            }
        }
    }

    return distances;
};