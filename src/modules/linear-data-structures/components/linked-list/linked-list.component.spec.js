import { LinkedList } from './linked-list.component.js';

/**
 * @author André Fillype Silva <andrefillype10@gmail.com>
 * @description Tests for Linked List Data Structure class.
 */
describe('Linked List DataStructure testing', () => {
    const linkedList = new LinkedList();

    /**
     * @testcase
     * @passCriteria Linked List should have 3 added elements.
     */
    test('should add 3 items into linked list', () => {
        linkedList.append(7);
        linkedList.append(11);
        linkedList.append(3);

        expect(linkedList.lookup(7)).toBeTruthy();
        expect(linkedList.lookup(11)).toBeTruthy();
        expect(linkedList.lookup(3)).toBeTruthy();
    });

    /**
     * @testcase
     * @passCriteria Linked List should not have non-added elements.
     */
    test('should not find non-added items into linked list', () => {
        expect(linkedList.lookup(1)).toBeFalsy();
        expect(linkedList.lookup(2)).toBeFalsy();
        expect(linkedList.lookup(5)).toBeFalsy();
    });

    /**
     * @testcase
     * @passCriteria Linked List should prepend an element.
     */
    test('should add an element in the beginning of the linked list', () => {
        linkedList.prepend(100);
        expect(linkedList.head.value).toEqual(100);
    });

    /**
     * @testcase
     * @passCriteria Linked List should insert the element in the correct position.
     */
    test('should insert the element in the correct position of the linked list', () => {
        linkedList.insert(0, 23);
        linkedList.insert(3, 24);
        linkedList.insert(6, 75);
        expect(linkedList.head.value).toEqual(23);
        expect(linkedList.lookup(24)).toBeTruthy();
    });

    /**
     * @testcase
     * @passCriteria Linked List should insert value for head and tail for an empty linked list.
     */
    test('should insert the element in the first position of the linked list and it should be the head and the tail because it is empty', () => {
        const emptyLinkedList = new LinkedList();
        emptyLinkedList.insert(1000, 500);
        expect(emptyLinkedList.head.value).toEqual(500);
        expect(emptyLinkedList.tail.value).toEqual(500);
    });

    /**
     * @testcase
     * @passCriteria Linked List should insert value for head.next because it only has head item.
     */
    test('should insert value for head.next because it only has head item', () => {
        const emptyLinkedList = new LinkedList();
        emptyLinkedList.insert(1000, 500);

        emptyLinkedList.insert(1000, 501);
        expect(emptyLinkedList.head.next.value).toEqual(501);
    });

    /**
     * @testcase
     * @passCriteria Linked List should delete the element from the correct position.
     */
    test('should delete the element from the correct position of the linked list', () => {
        linkedList.delete(3);
        linkedList.delete(0);
        expect(linkedList.lookup(24)).toBeFalsy();
        expect(linkedList.head.value).toEqual(100);
    });

    /**
     * @testcase
     * @passCriteria Linked List should not delete any element from an empty linked list.
     */
    test('should not delete any element from an empty linked list', () => {
        const emptyLinkedList = new LinkedList();
        expect(emptyLinkedList.delete(3)).toBeFalsy();
    });

    /**
     * @testcase
     * @passCriteria Linked List should delete the only element from the linked list.
     */
    test('should delete the only element from the linked list correctly', () => {
        const emptyLinkedList = new LinkedList();
        emptyLinkedList.prepend(9);
        expect(emptyLinkedList.lookup(9)).toBeTruthy();

        emptyLinkedList.delete(0);
        expect(emptyLinkedList.head).toBeFalsy();
        expect(emptyLinkedList.tail).toBeFalsy();
    });

    /**
     * @testcase
     * @passCriteria Linked List should return the correct generated object.
     */
    test('should return the correct generated linked list through the tests', () => {
        expect(linkedList.get()).toEqual('100 -> 7 -> 11 -> 3 -> 75');
    });

    /**
     * @testcase
     * @passCriteria Linked List should return a string containing only one element.
     */
    test('should return a string containing only one element', () => {
        const emptyLinkedList = new LinkedList();
        emptyLinkedList.prepend(0);
        expect(emptyLinkedList.get()).toEqual(0);
    });

    /**
     * @testcase
     * @passCriteria Linked List should return null for an empty lookup linked list.
     */
    test('should return null for an empty lookup linked list', () => {
        const emptyLinkedList = new LinkedList();
        expect(emptyLinkedList.lookup(4)).toBeFalsy();
    });
});
