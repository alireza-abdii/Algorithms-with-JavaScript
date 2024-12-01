

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

    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty!");
        }
        return this.items[0];
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

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.size());
queue.clear();
console.log(queue.isEmpty());