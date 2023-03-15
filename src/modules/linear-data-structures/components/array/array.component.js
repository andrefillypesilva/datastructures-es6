import { Sorting } from "../../../../utils/sorting.utils.js";

export class Array {
    #length;
    #data;

    constructor() {
        this.#length = 0;
        this.#data = {};
    }

    // [time complexity]: O(1)
    get(index) {
        return index >= 0 ? this.#data[index] : this.#data;
    }

    // [time complexity]: O(1)
    push(item) {
        this.#data[this.#length] = item;
        this.#length++;
    }

    // [time complexity]: O(1)
    length() {
        return this.#length;
    }

    // [time complexity]: O(1)
    pop() {
        const item = this.#data[this.#length-1];

        delete this.#data[this.#length-1];
        this.#length--;

        return item;
    }

    // [time complexity]: O(1)
    update(index, item) {
        this.#data[index] = item;
    }

    // [time complexity]: O(n)
    shift() {
        delete this.#data[0];
        this.#length--;

        for (let i = 1; i <= this.#length; i++) {
            this.#data[i - 1] = this.#data[i];
        }

        delete this.#data[this.#length];

        return this.#data;
    }

    // [time complexity]: O(n)
    unshift(item) {
        for (let i = this.#length; i >= 0; i--) {
            this.#data[i] = this.#data[i - 1];
        }

        this.#data[0] = item;
        this.#length++;

        return this.#data;
    }

    // [time complexity]: O(n)
    find(item) {
        for (let i = 0; i < this.#length; i++) {
            if (this.#data[i].toString() === item.toString()) {
                return i;
            }
        }
        return -1;
    }

    // [time complexity]: O(n log n)
    sort() {
        Sorting.prototype.quickSort(this.#data, 0, this.#length - 1);
        return this.#data;
    }

    // [time complexity]: O(n)
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

    // [time complexity]: O(n)
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

    // [time complexity]: O(n + (a * b * ... * k))
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

    // [time complexity]: O(a * b)
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

    // [time complexity]: O(n)
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
