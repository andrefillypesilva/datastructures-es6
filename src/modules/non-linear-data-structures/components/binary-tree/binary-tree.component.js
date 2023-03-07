export class BinaryTree {
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
        this.clearVariables();
        this.current = this.root;

        this.searchForElementToDelete(value);

        if (this.foundElement) {
            this.reorganizeBinaryTreeAfterFindElementToDelete();
        }
    }

    clearVariables() {
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

    searchForElementToDelete(value) {
        while (this.current) {
            if (!this.foundElement) {
                if (+this.current.key === +value) {
                    this.setFoundElement();
                } else if (+this.current.key > +value) {
                    this.goForward('left');
                } else {
                    this.goForward('right');
                }
            } else {
                if (this.current === this.rightElement) {
                    if (!this.current.left) {
                        this.smallestGreaterThanLeft = this.current;
                        this.smallestGreaterThanLeftIsLeaf = !!(!this.current.right);
                        break;
                    }
                    this.searchForTheSmallestGreaterThanLeft('left');
                } else {
                    if (!this.current.right) {
                        this.smallestGreaterThanLeft = this.current;
                        this.smallestGreaterThanLeftIsLeaf = !!(!this.current.left);
                        break;
                    }
                    this.searchForTheSmallestGreaterThanLeft('right');
                }
            }
        }
    }

    reorganizeBinaryTreeAfterFindElementToDelete() {
        if (
            this.beforeFoundElementChildIsDifferentThanLastCurrentChild() ||
            this.beforeFoundElementIsEqualToLastCurrent()
        ) this.lastCurrent[this.direction] = null;

        if (this.smallestGreaterThanLeftIsDifferentOfItsChild())
            this.smallestGreaterThanLeft[this.direction] = null;

        this.foundElement = null;

        if (!this.foundElementIsLeaf) {
            if (this.smallestGreaterThanLeftIsDifferentThanLeftElement())
                this.smallestGreaterThanLeft.left = this.leftElement;
            
            if (this.smallestGreaterThanLeftIsDifferentThanRightElement())
                this.smallestGreaterThanLeft.right = this.rightElement;

            this.beforeFoundElement[this.foundElementDirection] = this.smallestGreaterThanLeft;
        }
    }

    setFoundElement() {
        this.foundElement = this.current;
        this.leftElement = this.foundElement.left;
        this.rightElement = this.foundElement.right;
        this.current = this.current.right ?? this.current.left;
        this.beforeFoundElement = this.lastCurrent;
        this.foundElementDirection = this.direction;
        this.foundElementIsLeaf = !this.foundElement.right && !this.foundElement.left;
    }

    goForward(direction) {
        this.lastCurrent = this.current;
        this.current = this.current[direction];
        this.direction = direction;
    }

    searchForTheSmallestGreaterThanLeft(direction) {
        this.smallestGreaterThanLeft = this.current[direction];
        this.lastCurrent = this.current;
        this.direction = direction;
        this.current = this.current[direction];
    }

    beforeFoundElementChildIsDifferentThanLastCurrentChild() {
        return (
            this.smallestGreaterThanLeftIsLeaf &&
            this.beforeFoundElement &&
            this.beforeFoundElement[this.foundElementDirection] &&
            this.lastCurrent &&
            this.lastCurrent[this.direction] &&
            +this.beforeFoundElement[this.foundElementDirection].key !== +this.lastCurrent[this.direction].key
        );
    }

    beforeFoundElementIsEqualToLastCurrent() {
        return (
            this.beforeFoundElement &&
            this.lastCurrent &&
            +this.beforeFoundElement.key === +this.lastCurrent.key
        );
    }

    smallestGreaterThanLeftIsDifferentOfItsChild() {
        return (
            this.smallestGreaterThanLeft &&
            this.smallestGreaterThanLeft[this.direction] &&
            +this.smallestGreaterThanLeft[this.direction].key === +this.smallestGreaterThanLeft.key
        );
    }

    smallestGreaterThanLeftIsDifferentThanLeftElement() {
        return (
            this.smallestGreaterThanLeft &&
            this.leftElement &&
            +this.smallestGreaterThanLeft.key !== +this.leftElement.key
        );
    }

    smallestGreaterThanLeftIsDifferentThanRightElement() {
        return (
            this.smallestGreaterThanLeft &&
            this.rightElement &&
            +this.smallestGreaterThanLeft.key !== +this.rightElement.key
        );
    }
}

export class BinaryTreeNode {
    constructor(_key) {
        this.key = _key;
        this.left = this.right = null;
    }
}
