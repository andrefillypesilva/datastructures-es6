import { DOMManipulator } from "../../../utils/domManipulator.utils";

export class QueueService {
    constructor() {
        this.queue;
        this.queueInputEl;
    }

    createQueueEvents(_queue) {
        this.queue = _queue;
        this.queueInputEl = document.getElementById('queueValueInput');

        this.renderQueue();

        this.createEnqueueEvent();
        this.createDequeueEvent();
        this.createLookupEvent();
        this.createPeekEvent();
    }

    renderQueue() {
        const container = document.getElementsByClassName('queue__box')[0];
        container.innerHTML = '';

        let current = this.queue.head;

        while (current) {
            const item = document.createElement('div');
            item.className = 'queue__item';
            item.innerHTML = current.value;
            container.append(item);

            current = current.next;
        }
    }

    createEnqueueEvent() {
        DOMManipulator.prototype.getDOMElement('enqueueQueueButton', () => {
            this.queue.enqueue(this.queueInputEl.value);
            this.renderQueue();
        });
    }

    createDequeueEvent() {
        DOMManipulator.prototype.getDOMElement('dequeueQueueButton', () => {
            this.queue.dequeue(this.queueInputEl.value);
            this.renderQueue();
        });
    }

    createLookupEvent() {
        DOMManipulator.prototype.getDOMElement('lookupQueueButton', () => {
            const item = this.queue.lookup(this.queueInputEl.value);
            alert(item.value);
        });
    }

    createPeekEvent() {
        DOMManipulator.prototype.getDOMElement('peekQueueButton', () => {
            const item = this.queue.peek();
            alert(item.value);
        });
    }
}
