import { BinaryTree } from "./binary-tree.component.js";

/**
 * @author André Fillype Silva <andrefillype10@gmail.com>
 * @description Tests for BinaryTree Data Structure class.
 */
describe('Binary Tree Data Structure testing', () => {
    const binaryTree = new BinaryTree();

    /**
     * @testcase
     * @passCriteria Elements entered should be inside the binary tree.
     */
    test('should insert 3 elements in the current binary tree and they should be found in the binary tree', () => {
        binaryTree.insert(100);
        binaryTree.insert(50);
        binaryTree.insert(300);
        binaryTree.insert(12);
        binaryTree.insert(88);
        binaryTree.insert(45);
        binaryTree.insert(3);

        expect(binaryTree.lookup(300).key).toBeTruthy();
        expect(binaryTree.lookup(50).key).toBeTruthy();
        expect(binaryTree.lookup(100).key).toBeTruthy();
        
        expect(binaryTree.lookup(30000)).toBeFalsy();
    });

    /**
     * @testcase
     * @passCriteria Elements deleted should not be inside the binary tree.
     */
    test('should delete 2 elements from the current binary tree and they should not be found in the binary tree', () => {
        binaryTree.delete(300);
        binaryTree.delete(50);

        expect(binaryTree.lookup(45).key).toBeTruthy();
        
        expect(binaryTree.lookup(300)).toBeFalsy();
        expect(binaryTree.lookup(50)).toBeFalsy();
    });

    /**
     * @testcase
     * @passCriteria After pass through the breadthFirstSearch algorithm, the returned array should be [100, 88, 12, 3, 45].
     */
     test('should return the correct array after pass through the binaryFirstSearch algorithm', () => {
        expect(binaryTree.breadthFirstSearch()).toEqual([100, 88, 12, 3, 45]);
    });

    /**
     * @testcase
     * @passCriteria After pass through the depthFirstSearch algorithm, the returned array should be correct for all types of approach.
     */
    test('should return the correct array after pass through the depthFirstSearch algorithm', () => {
        expect(binaryTree.depthFirstSearch()).toEqual([3, 12, 45, 88, 100]);
        expect(binaryTree.depthFirstSearch('inOrder')).toEqual([3, 12, 45, 88, 100]);
        expect(binaryTree.depthFirstSearch('preOrder')).toEqual([100, 88, 12, 3, 45]);
        expect(binaryTree.depthFirstSearch('postOrder')).toEqual([3, 45, 12, 88, 100]);
    });
});
