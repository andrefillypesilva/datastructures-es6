import { Queue } from './queue.component.js';

/**
 * @author André Fillype Silva <andrefillype10@gmail.com>
 * @description Tests for Queue Data Structure class.
 */
describe('Queue Data Structure testing', () => {
    const queue = new Queue();

    /**
     * @testcase
     * @passCriteria Queue's head should be the first element that entered.
     */
    test('should enqueue 3 elements in the current queue and the first element of the queue should be the first element that entered', () => {
        queue.enqueue(100);
        queue.enqueue(50);
        queue.enqueue(300);

        expect(queue.peek().value).toEqual(100);
    });

    /**
     * @testcase
     * @passCriteria Elements enqueued should be in the queue.
     */
    test('should find the enqueue elements in the current queue and change the head when dequeue', () => {
        queue.enqueue(750);

        expect(queue.lookupQueue(50)).toBeTruthy();
        expect(queue.lookupQueue(750)).toBeTruthy();

        queue.dequeue();

        expect(queue.lookupQueue(100)).toBeFalsy();
        expect(queue.peek().value).toEqual(50);
    });
});
