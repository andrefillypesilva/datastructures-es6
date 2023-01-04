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
        this.array2 = new Array();
        this.array3 = new Array();
        this.linkedList = new LinkedList();
        this.queue = new Queue();
        this.stack = new Stack();
    }

    fillArray() {
        for (let i = 0; i < 10; i++) {
            this.array.push(i);
        }

        for (let i = 0; i < 10; i++) {
            this.array2.push(i);
        }

        for (let i = 0; i < 10; i++) {
            this.array3.push(i);
        }
    }

    printArray() {
        console.log('[Array Length]: ', this.array.length());
        console.log('[Array Values]');
        for (let i = 0; i < this.array.length(); i++) {
            console.log(this.array.get(i));
        }
    }

    printArray2() {
        console.log('[Array2 Length]: ', this.array2.length());
        console.log('[Array2 Values]');
        for (let i = 0; i < this.array2.length(); i++) {
            console.log(this.array2.get(i));
        }
    }

    getArray() {
        return this.array.get();
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

    toStringArray() {
        return this.array.toString();
    }

    joinArray() {
        return this.array.join(' - * - ');
    }

    concatArrays() {
        return this.array.concat(this.array2, this.array3);
    }

    spliceInArray() {
        const newArray = new Array();
        newArray.push(5);
        newArray.push(7);
        newArray.push(9);
        newArray.push(12);
        newArray.push(24);
        console.log(newArray.get());
        return newArray.splice(0, 0, 8);
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
console.log(index.joinArray());
console.log(index.concatArrays());
index.printArray();
index.printArray2();
console.log(index.getArray());
console.log(index.spliceInArray());
