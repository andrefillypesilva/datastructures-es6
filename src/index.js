import { Array, LinkedList, Queue, Stack } from './modules/linear-data-structures/linear-data-structures.module';

export class Index {
    #_applicationName;

    getApplicationName() {
        return this.#_applicationName;
    }

    setApplicationName(value) {
        this.#_applicationName = value;
    }

    constructor() {
        this.array = new Array();
        this.linkedList = new LinkedList();
        this.queue = new Queue();
        this.stack = new Stack();
    }

    fillArray() {
        for (let i = 0; i < 10; i++) {
            this.array.push(i);
        }
    }

    printArray() {
        console.log('[Array Length]: ', this.array.length());
        console.log('[Array Values]');
        for (let i = 0; i < this.array.length(); i++) {
            console.log(this.array.get(i));
        }
    }

    updateArray() {
        for (let i = 0; i < 5; i++) {
            this.array.update(i, this.array.get(this.array.length() - (i + 1)));
            this.array.pop();
        }
    }

    shiftArray() {
        return this.array.shift();
    }

    unshiftArray(item) {
        return this.array.unshift(item);
    }

    findInArray(item) {
        return this.array.find(item);
    }

    sortArray() {
        return this.array.sort();
    }
}

const index = new Index();
index.setApplicationName('[Data Structures Playground]');
index.fillArray();
index.printArray();
index.updateArray();
index.printArray();
console.log('Find 10: ', index.findInArray(10));
console.log('Find 5: ', index.findInArray(5));
console.log('Sorted array: ', index.sortArray());
console.log(index.shiftArray());
console.log(index.array.length());
console.log(index.shiftArray());
console.log(index.array.length());
console.log(index.unshiftArray(1000));
console.log(index.array.length());
