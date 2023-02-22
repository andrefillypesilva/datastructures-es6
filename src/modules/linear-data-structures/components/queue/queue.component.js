import { LinkedList } from '../linked-list/linked-list.component';

export class Queue extends LinkedList {
    constructor() {
        super();
    }

    // [time complexity]: O(n)
    lookupQueue(value) {
        return this.lookup(value);
    }

    // [time complexity]: O(1)
    enqueue(value) {
        this.append(value);
    }

    // [time complexity]: O(1)
    dequeue() {
        this.delete(0);
    }

    // [time complexity]: O(1)
    peek() {
        return this.head;
    }
}
