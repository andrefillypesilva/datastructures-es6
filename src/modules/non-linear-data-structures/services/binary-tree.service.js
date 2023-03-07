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
        const childrenList = document.createElement('ul');
        childrenList.append(children[0]);
        childrenList.append(children[1]);

        li.append(childrenList);

        ul.append(li);
        tree.append(ul);

        container.append(tree);
    }

    createTreeBranches(root) {
        const liChildLeft = document.createElement('li');
        const spanChildLeft = document.createElement('span');
        spanChildLeft.className = 'tf-nc';
        spanChildLeft.innerHTML = root.left ? root.left.key : '';

        const liChildRight = document.createElement('li');
        const spanChildRight = document.createElement('span');
        spanChildRight.className = 'tf-nc';
        spanChildRight.innerHTML = root.right ? root.right.key : '';

        liChildLeft.append(spanChildLeft);
        liChildRight.append(spanChildRight);

        return [
            liChildLeft,
            liChildRight,
        ];
    }
}
