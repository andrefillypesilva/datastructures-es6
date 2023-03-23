import { LinkedList, LinkedListNode } from '../linked-list/linked-list.component.js';

/**
 * @author André Fillype Silva <andrefillype10@gmail.com>
 * @description Implementation of the Queue Data Structure.
 */
export class Queue extends LinkedList {
    /**
     * Creates a new Queue.
     * @class
     */
    constructor() {
        super();
    }

    /**
     * Finds the selected element in the queue and return it.
     * @public
     * @param {number|string} value 
     * @returns {LinkedListNode|null}
     * [time complexity]: O(n)
     */
    lookupQueue(value) {
        return this.lookup(value);
    }

    /**
     * Inserts the provided value in the end of the queue.
     * @public
     * @param {number|string} value 
     * [time complexity]: O(n)
     */
    enqueue(value) {
        this.append(value);
    }

    /**
     * Removes the first element of the queue.
     * @public
     * [time complexity]: O(1)
     */
    dequeue() {
        this.delete(0);
    }

    /**
     * Returns the first element of the queue.
     * @public
     * @returns {LinkedListNode|null}
     * [time complexity]: O(1)
     */
    peek() {
        return this.head;
    }
}
