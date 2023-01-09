export class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    // [time complexity]: O(1)
    prepend(value) {
        const node = new LinkedListNode(value);
        const oldHead = this.head;
        
        node.next = oldHead;
        this.head = node;
    }

    // [time complexity]: O(1)
    append(value) {
        const node = new LinkedListNode(value);
        const oldTail = this.tail;
        
        if (oldTail) {
            oldTail.next = node;
        } else {
            this.head.next = node;
        }
        this.tail = node;
    }

    // [time complexity]: O(n)
    lookup(value) {
        let currentNode = this.head;

        while (currentNode.next) {
            if (currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    // [time complexity]: O(n)
    insert(position, value) {
        const node = new LinkedListNode(value);
        let currentNode = this.head;
        let i = 0;

        while (currentNode.next) {
            if (i === position - 1) {
                const next = currentNode.next;
                currentNode.next = node;
                node.next = next;
                return node;
            }

            i++;
            currentNode = currentNode.next;
        }
    }

    // [time complexity]: O(n)
    delete(position) {
        if (position === 0) {
            this.head = null;
        } else {
            let currentNode = this.head;
            let i = 0;

            while (currentNode.next) {
                if (i === position - 1) {
                    const next = currentNode.next
                    currentNode.next = currentNode.next.next;
                    next = null;
                    return currentNode;
                }
            }
        }
    }
}

export class LinkedListNode {
    constructor (_value) {
        this.value = _value;
        this.next = null;
    }
}
