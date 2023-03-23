import { Sorting } from "../../../../utils/sorting.utils.js";

/**
 * @author André Fillype Silva <andrefillype10@gmail.com>
 * @description Implementation of the Array Data Structure.
 */
export class Array {
    #length;
    #data;

    /**
     * Creates a new Array.
     * @class
     */
    constructor() {
        this.#length = 0;
        this.#data = {};
    }

    /**
     * Gets an array item for a provided index or gets the entire array in case of the index is not provided.
     * @public
     * @param {number} index 
     * @returns {number|Object}
     * [time complexity]: O(1)
     */
    get(index) {
        return index >= 0 ? this.#data[index] : this.#data;
    }

    /**
     * Pushes the provided value in the current array.
     * @public
     * @param {*} item 
     * [time complexity]: O(1)
     */
    push(item) {
        this.#data[this.#length] = item;
        this.#length++;
    }

    /**
     * Returns the length of the current array.
     * @public
     * @returns {number}
     * [time complexity]: O(1)
     */
    length() {
        return this.#length;
    }

    /**
     * Removes the last element from the current array and returns it.
     * @public
     * @returns {*}
     * [time complexity]: O(1)
     */
    pop() {
        const item = this.#data[this.#length-1];

        delete this.#data[this.#length-1];
        this.#length--;

        return item;
    }

    /**
     * Updates the value for a new provided one in the provided index.
     * @public
     * @param {number} index 
     * @param {*} item 
     * [time complexity]: O(1)
     */
    update(index, item) {
        this.#data[index] = item;
    }

    /**
     * Removes the first element from the current array and returns the resulting array.
     * @public
     * @returns {Object}
     * [time complexity]: O(n)
     */
    shift() {
        delete this.#data[0];
        this.#length--;

        for (let i = 1; i <= this.#length; i++) {
            this.#data[i - 1] = this.#data[i];
        }

        delete this.#data[this.#length];

        return this.#data;
    }

    /**
     * Inserts the provided value in the beginning of the current array.
     * @public
     * @param {*} item 
     * @returns {Object}
     * [time complexity]: O(n)
     */
    unshift(item) {
        for (let i = this.#length; i >= 0; i--) {
            this.#data[i] = this.#data[i - 1];
        }

        this.#data[0] = item;
        this.#length++;

        return this.#data;
    }

    /**
     * Returns a finded index if the current array has the provided value, otherwise returns -1.
     * @public
     * @param {*} item 
     * @returns {number}
     * [time complexity]: O(n)
     */
    find(item) {
        for (let i = 0; i < this.#length; i++) {
            if (this.#data[i].toString() === item.toString()) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Returns the sorted array, using Quick Sort Algorithm.
     * @public
     * @returns {Object}
     * [time complexity]: O(n log n)
     */
    sort() {
        Sorting.prototype.quickSort(this.#data, 0, this.#length - 1);
        return this.#data;
    }

    /**
     * Returns the entire array in a string format.
     * @public
     * @returns {string}
     * [time complexity]: O(n)
     */
    toString() {
        let arrayString = '';

        for (let i = 0; i < this.#length; i++) {
            arrayString += `${this.#data[i]}`;
            if (i !== this.#length - 1) {
                arrayString += ',';
            }
        }

        return arrayString;
    }

    /**
     * Join all values of the current array into a string, separated by the provided term.
     * @public
     * @param {*} item 
     * @returns {string}
     * [time complexity]: O(n)
     */
    join(item) {
        let arrayString = '';

        for (let i = 0; i < this.#length; i++) {
            arrayString += `${this.#data[i]}`;
            if (i !== this.#length - 1) {
                arrayString += `${item}`;
            }
        }

        return arrayString;
    }

    /**
     * Concats the current array with a provided term (it can be any value or other Array).
     * @public
     * @param {*} args 
     * @returns {Object}
     * [time complexity]: O(n + (a * b * ... * k))
     */
    concat(...args) {
        // [warning]: The Javascript's concat() method does not change the existing arrays. It always returns a new array.
        const newArray = new Array();

        for (let i = 0; i < this.#length; i++) {
            newArray.push(this.#data[i]);
        }

        let i = 0;

        while (args[i]) {
            if (typeof args[i] === 'string') {
                newArray.push(args[i]);
            } else {
                for (let j = 0; j < args[i].length(); j++) {
                    newArray.push(args[i].get(j));
                }
            }
            i++;
        }

        return newArray.#data;
    }

    /**
     * Returns a new array with the provided value inserted in the provided index, shifting the remaining elements
     * to right. However, if a n value has been provided by quantityToDelete param and it is greater than zero,
     * it will delete the n elements after the provided index and replace the value instead of them.
     * @public
     * @param {number} startIndex 
     * @param {number} quantityToDelete 
     * @param  {*} items 
     * @returns {Object}
     * [time complexity]: O(a * b)
     */
    splice(startIndex, quantityToDelete, ...items) {
        const array = new Array();
        const endIndex = +startIndex + +quantityToDelete;

        for (let i = 0; i < this.#length; i++) {
            if (i === +startIndex) {
                let j = 0;

                while (items[j]) {
                    array.push(items[j]);
                    j++;
                }
            }
            
            if (+startIndex >= i || i > endIndex) {
                array.push(this.#data[i]);
            }
        }

        return array.#data;
    }

    /**
     * Returns a slice of the current array, based on the start/end indexes provided (if the end index has not been
     * provided, it will consider the length of the current array).
     * @public
     * @param {number} startIndex 
     * @param {number} endIndex 
     * @returns {Object}
     * [time complexity]: O(n)
     */
    slice(startIndex, endIndex) {
        const array = new Array();
        const computedEndIndex = endIndex ?? this.#length;

        for (let i = startIndex; i < this.#length; i++) {
            if (i < computedEndIndex) {
                array.push(this.#data[i]);
            }
        }

        return array.#data;
    }
}
