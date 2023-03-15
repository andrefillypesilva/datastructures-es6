import { LinkedList } from "../linked-list/linked-list.component.js";

export class Stack extends LinkedList {
    constructor() {
        super();
    }

    // [time complexity]: O(n)
    lookupStack(value) {
        return this.lookup(value);
    }

    // [time complexity]: O(1)
    pop() {
        this.delete(0);
    }

    // [time complexity]: O(1)
    push(value) {
        this.prepend(value);
    }

    // [time complexity]: O(1)
    peek() {
        return this.head;
    }
}
