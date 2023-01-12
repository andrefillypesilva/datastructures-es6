import { Bootstrap } from './utils/bootstrap.utils';
import { Array, LinkedList, Queue, Stack } from './modules/linear-data-structures/linear-data-structures.module';

import './index.scss';

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
            this.array.push(Math.floor(Math.random() * i * 100));
        }

        for (let i = 0; i < 10; i++) {
            this.array2.push(i);
        }

        for (let i = 0; i < 10; i++) {
            this.array3.push(i);
        }
    }

    createLinkedList() {
        console.log(this.linkedList.get());
        this.linkedList.append(5);
        console.log('append 5: ');
        console.log(this.linkedList.get());
        this.linkedList.append(7);
        console.log('append 7:');
        console.log(this.linkedList.get());
        this.linkedList.append(1);
        console.log('append 1:');
        console.log(this.linkedList.get());
        this.linkedList.prepend(12);
        console.log('prepend 12:');
        console.log(this.linkedList.get());
        this.linkedList.insert(5, 888);
        console.log('insert 5, 888:');
        console.log(this.linkedList.get());
        this.linkedList.insert(2, 999);
        console.log('insert 2, 999:');
        console.log(this.linkedList.get());
        console.log('lookup 888:');
        console.log(this.linkedList.lookup(888));
        console.log('lookup 34:');
        console.log(this.linkedList.lookup(34));
        console.log('delete 0:');
        console.log(this.linkedList.delete(0));
        console.log(this.linkedList.get());
    }
}

const index = new Index();
index.setApplicationName('[Data Structures Playground]');

Bootstrap.prototype.createScreen();
index.fillArray();

setTimeout(() => {
    Bootstrap.prototype.createDOMEvents(index.array);
}, 1000);

index.createLinkedList();
