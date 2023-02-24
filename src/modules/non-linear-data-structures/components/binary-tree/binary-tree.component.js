export class BinaryTree {
    constructor () {
        this.root = null;
    }

    // [time complexity]: O(log n)
    lookup(value) {
        let current = this.root;

        while (current) {
            if (current.key === value) {
                return current;
            } else if (current.key > value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return null;
    }

    // [time complexity]: O(log n)
    insert(value) {
        console.log(value);
        const node = new BinaryTreeNode(value);

        if (!this.root) {
            this.root = node;
        } else {
            let current = this.root;

            while (current) {
                if (current.key > node.key) {
                    if (current.left) {
                        if (current.left.key > node.key) {
                            current = current.left;
                        } else {
                            // node.left = current.left;
                            // current.left = node;
                            // current = current.left;
                            // break;
                            current = current.right;
                        }
                    } else {
                        current.left = node;
                        current = current.left;
                        break;
                    }
                } else {
                    if (current.right) {
                        if (node.key > current.right.key) {
                            current = current.right;
                        } else {
                            // node.right = current.right;
                            // current.right = node;
                            // current = current.right;
                            // break;
                            current = current.left;
                        }
                    } else {
                        current.right = node;
                        current = current.right;
                        break;
                    }
                }
            }
        }

        console.log(this.root);
    }

    // [time complexity]: O(log n)
    delete() {

    }
}

export class BinaryTreeNode {
    constructor(_key) {
        this.key = _key;
        this.left = this.right = null;
    }
}
