import { Sorting } from "../../../../utils/sorting.utils";

export class Array {
    #length;
    #data;

    constructor() {
        this.#length = 0;
        this.#data = {};
    }

    // [time complexity]: O(1)
    get(index) {
        return this.#data[index];
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
            if (this.#data[i] === item) {
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
}
