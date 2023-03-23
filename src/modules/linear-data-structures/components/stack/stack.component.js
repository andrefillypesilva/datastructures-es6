import { LinkedList, LinkedListNode } from "../linked-list/linked-list.component.js";

/**
 * @author André Fillype Silva <andrefillype10@gmail.com>
 * @description Implementation of the Stack Data Structure.
 */
export class Stack extends LinkedList {
    /**
     * Creates a new Stack.
     * @class
     */
    constructor() {
        super();
    }

    /**
     * Finds the provided element in the stack.
     * @public
     * @param {number|string} value 
     * @returns {LinkedListNode|null}
     * [time complexity]: O(n)
     */
    lookupStack(value) {
        return this.lookup(value);
    }

    /**
     * Removes the element in the top of the stack.
     * @public
     * [time complexity]: O(1)
     */
    pop() {
        this.delete(0);
    }

    /**
     * Inserts the provided value in the top of the stack.
     * @public
     * @param {number|string} value 
     * [time complexity]: O(1)
     */
    push(value) {
        this.prepend(value);
    }

    /**
     * Returns the element in the top of the stack.
     * @public
     * @returns {LinkedListNode|null}
     * [time complexity]: O(1)
     */
    peek() {
        return this.head;
    }
}
