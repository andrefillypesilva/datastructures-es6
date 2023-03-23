/**
 * @author André Fillype Silva <andrefillype10@gmail.com>
 * @description Implementation of the Linked List Data Structure.
 */
export class LinkedList {
    /**
     * Creates a new Linked List.
     * @class
     */
    constructor () {
        this.head = null;
        this.tail = null;
    }

    /**
     * Inserts the provided element in the beginning of the linked list and this element becomes the head.
     * @param {number|string} value 
     * [time complexity]: O(1)
     */
    prepend(value) {
        const node = new LinkedListNode(value);
        const oldHead = this.head;
        
        node.next = oldHead;
        this.head = node;

        if (!this.tail) this.tail = node;
    }

    /**
     * Inserts the provided element in the end of the linked list and this element becomes the tail.
     * @param {number|string} value 
     * [time complexity]: O(1)
     */
    append(value) {
        const node = new LinkedListNode(value);
        
        if (this.tail) {
            const oldTail = this.tail;
            oldTail.next = node;
        } else {
            this.head = node;
        }
        this.tail = node;
    }

    /**
     * Finds the provided element in the linked list and returns the node if exists, otherwise returns null.
     * @param {number|string} value 
     * @returns {LinkedListNode|null}
     * [time complexity]: O(n)
     */
    lookup(value) {
        if (this.head) {
            let currentNode = this.head;

            while (currentNode) {
                if (currentNode.value === value || currentNode.value === +value) {
                    return currentNode;
                }

                currentNode = currentNode.next;
            }
        }

        return null;
    }

    /**
     * Inserts the provided element in the provided position.
     * @param {number} position 
     * @param {number|string} value 
     * @returns {LinkedListNode}
     * [time complexity]: O(n)
     */
    insert(position, value) {
        const node = new LinkedListNode(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this.head;
        } else if (+position === 0) {
            const oldHead = this.head;
            node.next = oldHead;
            this.head = node;
            return this.head;
        } else if (!this.head.next) {
            this.head.next = node;
            return this.head.next;
        } else {
            let currentNode = this.head;
            let i = 0;

            while (currentNode.next) {
                if (i === position - 1) {
                    const next = currentNode.next;
                    currentNode.next = node;
                    node.next = next;

                    if (!currentNode.next) this.tail = node;

                    return node;
                }

                i++;
                currentNode = currentNode.next;
            }

            const oldTail = this.tail;
            oldTail.next = node;
            this.tail = node;
        }
    }

    /**
     * Removes an element from the provided position.
     * @param {number} position 
     * @returns {LinkedListNode}
     * [time complexity]: O(n)
     */
    delete(position) {
        if (this.head) {
            if (+position === 0) {
                let oldHead = this.head;
                this.head = this.head.next;

                oldHead = null;

                if (!this.head) {
                    this.tail = null;
                }
            } else {
                let currentNode = this.head;
                let i = 0;
    
                while (currentNode.next) {
                    if (i === position - 1) {
                        let next = currentNode.next;
                        currentNode.next = currentNode.next.next;
                        if (next === this.tail) this.tail = currentNode;
                        next = null;
                        return currentNode;
                    }

                    i++;
                    currentNode = currentNode.next;
                }
            }
        }

        return this.head;
    }

    /**
     * Returns a string containing the entire linked list.
     * @returns {string}
     * [time complexity]: O(n)
     */
    get() {
        let linkedList = '';

        if (this.head) {
            let currentNode = this.head;
            linkedList = currentNode.value;
            currentNode = currentNode.next;
            
            if (currentNode) {
                while (currentNode.next) {
                    linkedList += ` -> ${currentNode.value}`;
                    currentNode = currentNode.next;
                }

                linkedList += ` -> ${currentNode.value}`;
            }
        }

        return linkedList;
    }
}

export class LinkedListNode {
    /**
     * Creates a new Linked List Node.
     * @class
     */
    constructor (_value) {
        this.value = _value;
        this.next = null;
    }
}
