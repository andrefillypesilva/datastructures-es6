import { Stack } from './stack.component.js';

/**
 * @author André Fillype Silva <andrefillype10@gmail.com>
 * @description Tests for Stack Data Structure class.
 */
describe('Stack Data Structure testing', () => {
    const stack = new Stack();

    /**
     * @testcase
     * @passCriteria Stack's head should be the last element that entered.
     */
    test('should push 3 elements in the current stack and the first element of the stack should be the last element that entered', () => {
        stack.push(100);
        stack.push(50);
        stack.push(300);

        expect(stack.peek().value).toEqual(300);
    });

    /**
     * @testcase
     * @passCriteria Elements pushed should be in the stack.
     */
    test('should find the pushed elements in the current stack and change the head when pop', () => {
        stack.push(750);

        expect(stack.lookupStack(50)).toBeTruthy();
        expect(stack.lookupStack(750)).toBeTruthy();

        stack.pop();

        expect(stack.lookupStack(100)).toBeTruthy();
        expect(stack.lookupStack(750)).toBeFalsy();

        stack.pop();
        stack.pop();

        expect(stack.peek().value).toEqual(100);
    });
});
