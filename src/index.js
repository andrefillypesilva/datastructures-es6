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
}

const index = new Index();
index.setApplicationName('[Data Structures Playground]');

Bootstrap.prototype.createScreen();
index.fillArray();

setTimeout(() => {
    Bootstrap.prototype.createDOMEvents(index.array);
}, 1000);

