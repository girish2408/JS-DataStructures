class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(el) {
        this.queue.push(el);
    }

    dequeue(el) {
        if (this.isEmpty()) {
            return "queue is empty";
        }
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return "queue is empty";
        }
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    length() {
        return this.queue.length;
    }

    printQueue() {
        return this.queue.join(',');
    }

    clearQueue() {
        this.queue = [];
    }
}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.dequeue();
console.log(myQueue.printQueue());
