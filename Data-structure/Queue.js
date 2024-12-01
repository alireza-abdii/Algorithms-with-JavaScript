

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(el) {
        this.items.push(el);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty!");
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

const queue = new Queue;
