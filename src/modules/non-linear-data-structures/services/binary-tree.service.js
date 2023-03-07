export class BinaryTreeService {
    constructor() {
        this.binaryTree;
    }

    createBinaryTreeEvents(_binaryTree) {
        this.binaryTree = _binaryTree;

        this.renderBinaryTree();
    }

    renderBinaryTree() {
        const container = document.getElementsByClassName('binary-tree__container')[0];
        container.innerHTML = '';

        const tree = document.createElement('div');
        tree.className = 'tf-tree';

        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = 'tf-nc';
        span.innerHTML = this.binaryTree.root.key;

        li.append(span);

        const children = this.createTreeBranches(this.binaryTree.root);
        const ulChildren = document.createElement('ul');
        ulChildren.append(children[0]);
        ulChildren.append(children[1]);

        li.append(ulChildren);

        ul.append(li);
        tree.append(ul);

        container.append(tree);
    }

    createTreeBranches(root) {
        const liChildLeft = document.createElement('li');
        const spanChildLeft = document.createElement('span');
        spanChildLeft.className = 'tf-nc';

        if (root.left) {
            spanChildLeft.innerHTML = root.left.key;
            liChildLeft.append(spanChildLeft);

            const ul = this.addChildrenNodes(root.left);
            if (ul) liChildLeft.append(ul);
        } else {
            liChildLeft.className = 'binary-tree__empty-node';

            spanChildLeft.innerHTML = 'null';
            liChildLeft.append(spanChildLeft);
        }

        const liChildRight = document.createElement('li');
        const spanChildRight = document.createElement('span');
        spanChildRight.className = 'tf-nc';

        if (root.right) {
            spanChildRight.innerHTML = root.right.key;
            liChildRight.append(spanChildRight);

            const ul = this.addChildrenNodes(root.right);
            if (ul) liChildRight.append(ul);
        } else {
            liChildRight.className = 'binary-tree__empty-node';

            spanChildRight.innerHTML = 'null';
            liChildRight.append(spanChildRight);
        }

        return [
            liChildLeft,
            liChildRight,
        ];
    }

    addChildrenNodes(node) {
        const ul = document.createElement('ul');
        const children = this.createTreeBranches(node);

        if (!(children[0].className === 'binary-tree__empty-node' &&
            children[1].className === 'binary-tree__empty-node')) {
            ul.append(children[0]);
            ul.append(children[1]);
            
            return ul;
        }

        return;
    }
}
