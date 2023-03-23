import { LinkedList } from '../linked-list/linked-list.component.js';

/**
 * @author André Fillype Silva <andrefillype10@gmail.com>
 * @description Implementation of the Linked List Data Structure.
 */
export class Queue extends LinkedList {
    /**
     * Creates a new Queue.
     * @class
     */
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
