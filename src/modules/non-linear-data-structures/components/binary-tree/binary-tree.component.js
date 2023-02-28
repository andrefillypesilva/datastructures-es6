export class BinaryTree {
    constructor () {
        this.root = null;
    }

    // [time complexity]: O(log n)
    lookup(value) {
        let current = this.root;

        while (current) {
            if (+current.key === +value) {
                return current;
            } else if (+current.key > +value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return null;
    }

    // [time complexity]: O(log n)
    insert(value) {
        const node = new BinaryTreeNode(value);

        if (!this.root) {
            this.root = node;
        } else {
            let current = this.root;

            while (current) {
                if (+current.key > +node.key) {
                    if (current.left) {
                        current = current.left;
                        
                        if (+node.key > +current.key) {
                            if (current.right) {
                                current = current.right;
                            } else {
                                current.right = node;
                                current = current.right;
                                break;
                            }
                        }
                    } else {
                        current.left = node;
                        current = current.left;
                        break;
                    }
                } else {
                    if (current.right) {
                        current = current.right;
                        
                        if (current.key > +node.key) {
                            if (current.left) {
                                current = current.left;
                            } else {
                                current.left = node;
                                current = current.left;
                                break;
                            }
                        }
                    } else {
                        current.right = node;
                        current = current.right;
                        break;
                    }
                }
            }
        }
    }

    // [time complexity]: O(log n)
    delete(value) {
        let current = this.root;
        let foundElement = null;
        let leftElement = null;
        let rightElement = null;
        let smallestGreaterThanLeft = null;
        let lastCurrent = null;
        let direction = null;
        let beforeFoundElement = null;
        let foundElementDirection = null;

        while (current) {
            if (!foundElement) {
                if (+current.key === +value) {
                    foundElement = current;
                    leftElement = foundElement.left;
                    rightElement = foundElement.right;
                    current = current.right;
                    beforeFoundElement = lastCurrent;
                    foundElementDirection = direction;
                } else if (+current.key > +value) {
                    lastCurrent = current;
                    current = current.left;
                    direction = 'left';
                } else {
                    lastCurrent = current;
                    current = current.right;
                    direction = 'right';
                }
            } else {
                if (current === rightElement) {
                    if (current.left) {
                        smallestGreaterThanLeft = current.left;
                    } else {
                        smallestGreaterThanLeft = current;
                        break;
                    }
                    direction = 'left';
                    lastCurrent = current;
                    current = current.left;
                } else {
                    if (current.right) {
                        smallestGreaterThanLeft = current.right;
                    } else {
                        smallestGreaterThanLeft = current;
                        break;
                    }
                    direction = 'right';
                    lastCurrent = current;
                    current = current.right;
                }
            }
        }

        smallestGreaterThanLeft.left = leftElement;
        smallestGreaterThanLeft.right = rightElement;
        beforeFoundElement[foundElementDirection] = smallestGreaterThanLeft;
        lastCurrent[direction] = null;
        foundElement = null;
        console.log(this.root);
    }
}

export class BinaryTreeNode {
    constructor(_key) {
        this.key = _key;
        this.left = this.right = null;
    }
}
