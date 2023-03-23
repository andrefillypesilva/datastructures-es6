/**
 * @author André Fillype Silva <andrefillype10@gmail.com>
 * @description Implementation of the Binary Tree Data Structure.
 */
export class BinaryTree {
    /**
     * Create a new Binary Tree.
     * @class
     */
    constructor () {
        this.root = null;
        this.current = null;
        this.foundElement = null;
        this.foundElementIsLeaf = false;
        this.leftElement = null;
        this.rightElement = null;
        this.smallestGreaterThanLeft = null;
        this.smallestGreaterThanLeftIsLeaf = false;
        this.lastCurrent = null;
        this.direction = null;
        this.beforeFoundElement = null;
        this.foundElementDirection = null;
    }

    /**
     * Finds the provided element on the current binary tree.
     * @public
     * @param {number} value 
     * @returns {BinaryTreeNode|null}
     * [time complexity]: O(log n)
     */
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

    /**
     * Inserts the provided value in the correct position on the current binary tree.
     * @public
     * @param {number} value 
     * [time complexity]: O(log n)
     */
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

    /**
     * Removes the provided value from the current binary tree.
     * @public
     * @param {number} value 
     * [time complexity]: O(log n)
     */
    delete(value) {
        this.#clearVariables();
        this.current = this.root;

        this.#searchForElementToDelete(value);

        if (this.foundElement) {
            this.#reorganizeBinaryTreeAfterFindElementToDelete();
        }
    }

    /**
     * Returns current binary tree after parsing through the Breadth First Search algorithm.
     * @public
     * @returns {Object}
     * [time complexity]: O(n)
     */
    breadthFirstSearch() {
        let currentNode = this.root;
        const list = [];
        const queue = [];

        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.key);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return list;
    }

    /**
     * Returns current binary tree after parsing through the Depth First Search algorithm using the approach
     * provided by the type param (it can be inOrder, preOrder or postOrder).
     * @public
     * @param {string} type 
     * @returns {Object}
     * [time complexity]: O(n)
     */
    depthFirstSearch(type) {
        switch (type) {
            case 'inOrder':
                return this.#traverseInOrder(this.root, []);
            case 'preOrder':
                return this.#traversePreOrder(this.root, []);
            case 'postOrder':
                return this.#traversePostOrder(this.root, []);
            default:
                return this.#traverseInOrder(this.root, []);
        }
    }

    /**
     * Traverse binary tree in order.
     * @private
     * @param {BinaryTreeNode} node 
     * @param {Object} list 
     * @returns {Object}
     * [time complexity]: O(n)
     */
    #traverseInOrder(node, list) {
        if (node.left) {
            this.#traverseInOrder(node.left, list);
        }

        list.push(node.key);

        if (node.right) {
            this.#traverseInOrder(node.right, list);
        }

        return list;
    }

    /**
     * Traverse binary tree pre order.
     * @private
     * @param {BinaryTreeNode} node 
     * @param {Object} list 
     * @returns {Object}
     * [time complexity]: O(n)
     */
    #traversePreOrder(node, list) {
        list.push(node.key);

        if (node.left) {
            this.#traversePreOrder(node.left, list);
        }

        if (node.right) {
            this.#traversePreOrder(node.right, list);
        }

        return list;
    }

    /**
     * Traverse binary tree post order.
     * @private
     * @param {BinaryTreeNode} node 
     * @param {Object} list 
     * @returns {Object}
     * [time complexity]: O(n)
     */
    #traversePostOrder(node, list) {
        if (node.left) {
            this.#traversePostOrder(node.left, list);
        }

        if (node.right) {
            this.#traversePostOrder(node.right, list);
        }

        list.push(node.key);

        return list;
    }

    /**
     * Resets variables to inital state.
     * @private
     */
    #clearVariables() {
        this.current = null;
        this.foundElement = null;
        this.foundElementIsLeaf = false;
        this.leftElement = null;
        this.rightElement = null;
        this.smallestGreaterThanLeft = null;
        this.smallestGreaterThanLeftIsLeaf = false;
        this.lastCurrent = null;
        this.direction = null;
        this.beforeFoundElement = null;
        this.foundElementDirection = null;
    }

    /**
     * Search for element to delete.
     * @private
     */
    #searchForElementToDelete(value) {
        while (this.current) {
            if (!this.foundElement) {
                if (+this.current.key === +value) {
                    this.#setFoundElement();
                } else if (+this.current.key > +value) {
                    this.#goForward('left');
                } else {
                    this.#goForward('right');
                }
            } else {
                if (this.current === this.rightElement) {
                    if (!this.current.left) {
                        this.smallestGreaterThanLeft = this.current;
                        this.smallestGreaterThanLeftIsLeaf = !!(!this.current.right);
                        break;
                    }
                    this.#searchForTheSmallestGreaterThanLeft('left');
                } else {
                    if (!this.current.right) {
                        this.smallestGreaterThanLeft = this.current;
                        this.smallestGreaterThanLeftIsLeaf = !!(!this.current.left);
                        break;
                    }
                    this.#searchForTheSmallestGreaterThanLeft('right');
                }
            }
        }
    }

    /**
     * Reorganize binary tree after find element to delete.
     * @private
     */
    #reorganizeBinaryTreeAfterFindElementToDelete() {
        if (
            this.#beforeFoundElementChildIsDifferentThanLastCurrentChild() ||
            this.#beforeFoundElementIsEqualToLastCurrent()
        ) this.lastCurrent[this.direction] = null;

        if (this.#smallestGreaterThanLeftIsDifferentOfItsChild())
            this.smallestGreaterThanLeft[this.direction] = null;

        this.foundElement = null;

        if (!this.foundElementIsLeaf) {
            if (this.#smallestGreaterThanLeftIsDifferentThanLeftElement())
                this.smallestGreaterThanLeft.left = this.leftElement;
            
            if (this.#smallestGreaterThanLeftIsDifferentThanRightElement())
                this.smallestGreaterThanLeft.right = this.rightElement;

            this.beforeFoundElement[this.foundElementDirection] = this.smallestGreaterThanLeft;
        }
    }

    /**
     * Set information after find element.
     * @private
     */
    #setFoundElement() {
        this.foundElement = this.current;
        this.leftElement = this.foundElement.left;
        this.rightElement = this.foundElement.right;
        this.current = this.current.right ?? this.current.left;
        this.beforeFoundElement = this.lastCurrent;
        this.foundElementDirection = this.direction;
        this.foundElementIsLeaf = !this.foundElement.right && !this.foundElement.left;
    }

    /**
     * Move forward to next level on the binary tree.
     * @private
     */
    #goForward(direction) {
        this.lastCurrent = this.current;
        this.current = this.current[direction];
        this.direction = direction;
    }

    /**
     * Set information for smallest greater than left.
     * @private
     */
    #searchForTheSmallestGreaterThanLeft(direction) {
        this.smallestGreaterThanLeft = this.current[direction];
        this.lastCurrent = this.current;
        this.direction = direction;
        this.current = this.current[direction];
    }

    /**
     * Checks if the element before the found element is different than last current child.
     * @private
     * @returns {boolean}
     */
    #beforeFoundElementChildIsDifferentThanLastCurrentChild() {
        return (
            this.smallestGreaterThanLeftIsLeaf &&
            this.beforeFoundElement &&
            this.beforeFoundElement[this.foundElementDirection] &&
            this.lastCurrent &&
            this.lastCurrent[this.direction] &&
            +this.beforeFoundElement[this.foundElementDirection].key !== +this.lastCurrent[this.direction].key
        );
    }

    /**
     * Checks if the element before the found element is equal to last current element.
     * @private
     * @returns {boolean}
     */
    #beforeFoundElementIsEqualToLastCurrent() {
        return (
            this.beforeFoundElement &&
            this.lastCurrent &&
            +this.beforeFoundElement.key === +this.lastCurrent.key
        );
    }

    /**
     * Checks if the smallest greater than left is different of its child.
     * @private
     * @returns {boolean}
     */
    #smallestGreaterThanLeftIsDifferentOfItsChild() {
        return (
            this.smallestGreaterThanLeft &&
            this.smallestGreaterThanLeft[this.direction] &&
            +this.smallestGreaterThanLeft[this.direction].key === +this.smallestGreaterThanLeft.key
        );
    }

    /**
     * Checks if the smallest greater than left is different than left element.
     * @private
     * @returns {boolean}
     */
    #smallestGreaterThanLeftIsDifferentThanLeftElement() {
        return (
            this.smallestGreaterThanLeft &&
            this.leftElement &&
            +this.smallestGreaterThanLeft.key !== +this.leftElement.key
        );
    }

    /**
     * Checks if the smallest greater than left is different than right element.
     * @private
     * @returns {boolean}
     */
    #smallestGreaterThanLeftIsDifferentThanRightElement() {
        return (
            this.smallestGreaterThanLeft &&
            this.rightElement &&
            +this.smallestGreaterThanLeft.key !== +this.rightElement.key
        );
    }
}

export class BinaryTreeNode {
    /**
     * Creates a new Binary Tree Node.
     * @class
     */
    constructor(_key) {
        this.key = _key;
        this.left = this.right = null;
    }
}
