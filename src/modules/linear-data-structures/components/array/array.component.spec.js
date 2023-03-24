import { Array } from './array.component.js';

/**
 * @author André Fillype Silva <andrefillype10@gmail.com>
 * @description Tests for Array Data Structure class.
 */
describe('Array DataStructure testing', () => {
    const array = new Array();

    /**
     * @testcase
     * @passCriteria Array length should be equal to 3.
     */
    test('should add 3 items into array', () => {
        array.push(0);
        array.push(1);
        array.push(2);

        expect(array.length()).toEqual(3);
    });

    /**
     * @testcase
     * @passCriteria The index #1 of the array should be equal to 1.
     */
    test('should get second element from array', () => {
        expect(array.get(1)).toEqual(1);
    });

    /**
     * @testcase
     * @passCriteria The entire array should be equal to {0: 0, 1: 1, 2: 2}.
     */
    test('should get the entire array', () => {
        expect(array.get()).toEqual({0: 0, 1: 1, 2: 2});
    });

    /**
     * @testcase
     * @passCriteria Array length should be equal to 2.
     */
    test('should remove the last element from array', () => {
        array.pop();
        expect(array.length()).toEqual(2);
    });

    /**
     * @testcase
     * @passCriteria The index #1 of the array should be equal to 45.
     */
    test('should update the second element from array', () => {
        array.update(1, 45);
        expect(array.get(1)).toEqual(45);
    });

    /**
     * @testcase
     * @passCriteria The removed index and value should be equal to {0: 45}.
     */
    test('should shift the first element from array', () => {
        expect(array.shift()).toEqual({0: 45});
    });

    /**
     * @testcase
     * @passCriteria The new array after unshift element should be equal to {0: 75, 1: 45}.
     */
    test('should insert an element in the front of the array', () => {
        expect(array.unshift(75)).toEqual({0: 75, 1: 45});
    });

    /**
     * @testcase
     * @passCriteria The find method should return the index if found the element otherwise -1.
     */
    test('should find for an element into the array', () => {
        expect(array.find(75)).toEqual(0);
        expect(array.find(99)).toEqual(-1);
    });

    /**
     * @testcase
     * @passCriteria The entire array ordering ascending should be equal to {0: 45, 1: 75, 2: 200}.
     */
    test('should order the array ascending', () => {
        array.unshift(200);
        array.sort();
        expect(array.get()).toEqual({0: 45, 1: 75, 2: 200});
    });

    /**
     * @testcase
     * @passCriteria The string format for the array should be equal to 45,75,200.
     */
    test('should get the entire array in a string format', () => {
        expect(array.toString()).toEqual('45,75,200');
    });

    /**
     * @testcase
     * @passCriteria The joined format for the array using ' - ' term should be equal to 45 - 75 - 200.
     */
    test('should get the entire array in a string format separated by the provided term', () => {
        expect(array.join(' - ')).toEqual('45 - 75 - 200');
    });

    /**
     * @testcase
     * @passCriteria The concat of two different arrays should be equal to {0: 45, 1: 75, 2: 200, 3: 150, 4: 100}.
     */
    test('should concat two different arrays', () => {
        const newArray = new Array();
        newArray.push(150);
        newArray.push(100);

        expect(array.concat(newArray)).toEqual({0: 45, 1: 75, 2: 200, 3: 150, 4: 100});
    });

    /**
     * @testcase
     * @passCriteria The resulting array after splice for 3, 0 and 50 params should be equal to:
     * {0: 45, 1: 75, 2: 200, 3: 50, 4: 3, 5: 2, 6: 7};
     * and for 1, 2, 70 params should be equal to: {0: 45, 1: 70, 2: 75, 3: 2, 4: 7}.
     */
    test('should splice an element into the array', () => {
        array.push(3);
        array.push(2);
        array.push(7);
        expect(array.splice(3, 0, 50)).toEqual({0: 45, 1: 75, 2: 200, 3: 50, 4: 3, 5: 2, 6: 7});
        expect(array.splice(1, 2, 70)).toEqual({0: 45, 1: 70, 2: 75, 3: 2, 4: 7});
    });

    /**
     * @testcase
     * @passCriteria The slice for 1, 4 indexes should be equal to {0: 75, 1: 200, 2: 3}.
     */
    test('should get a slice of the array', () => {
        expect(array.slice(1, 4)).toEqual({0: 75, 1: 200, 2: 3});
    });
});
