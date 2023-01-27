import { DOMManipulator } from "../../../utils/domManipulator.utils";

export class LinkedListService {
    constructor () {
        this.linkedList;
        this.linkedListIndexInputEl;
        this.linkedListValueInputEl;
    }

    createLinkedListEvents(_linkedList) {
        this.linkedList = _linkedList;
        this.linkedListIndexInputEl = document.getElementById('linkedListIndexInput');
        this.linkedListValueInputEl = document.getElementById('linkedListValueInput');

        this.renderLinkedList();

        this.createPrependEvent();
        this.createAppendEvent();
        this.createInsertEvent();
        this.createDeleteEvent();
    }

    createPrependEvent() {
        DOMManipulator.prototype.getDOMElement('prependLinkedListButton', () => {
            this.linkedList.prepend(this.linkedListValueInputEl.value);
            this.renderLinkedList();
        });
    }

    createAppendEvent() {
        DOMManipulator.prototype.getDOMElement('appendLinkedListButton', () => {
            this.linkedList.append(this.linkedListValueInputEl.value);
            this.renderLinkedList();
        });
    }

    createInsertEvent() {
        DOMManipulator.prototype.getDOMElement('insertLinkedListButton', () => {
            this.linkedList.insert(this.linkedListIndexInputEl.value, this.linkedListValueInputEl.value);
            this.renderLinkedList();
        });
    }

    createDeleteEvent() {
        DOMManipulator.prototype.getDOMElement('deleteLinkedListButton', () => {
            this.linkedList.delete(this.linkedListIndexInputEl.value);
            this.renderLinkedList();
        });
    }

    renderLinkedList() {
        const container = document.getElementsByClassName('linked-list__container')[0];
        container.innerHTML = '';
        
        let current = this.linkedList.head;
        while (current) {
            const item = document.createElement('div');
            item.className = 'linked-list__item';

            if (current === this.linkedList.head || current === this.linkedList.tail) {
                const title = document.createElement('span');
                title.className = 'linked-list__item-title';
                title.innerHTML = current === this.linkedList.head ? 'HEAD NODE' : 'TAIL NODE';
                item.append(title);
            }

            const head = document.createElement('div');
            head.className = 'linked-list__head';
            head.innerHTML = current.value;

            const body = document.createElement('div');
            body.className = 'linked-list__body';

            const bullet = document.createElement('div');
            bullet.className = 'linked-list__bullet';

            const core = document.createElement('div');
            core.className = 'linked-list__bullet--core';

            bullet.append(core);
            body.append(bullet);
            item.append(head);
            item.append(body);

            container.append(item);

            const arrow = document.createElement('div');
            if (current !== this.linkedList.tail) {
                arrow.className = 'linked-list__arrow';
                arrow.innerHTML = '&#10138;';
            } else {
                arrow.className = 'linked-list__arrow linked-list__arrow--end';
                arrow.innerHTML = '&#10137;';

                const nullSpan = document.createElement('span');
                nullSpan.innerHTML = 'NULL';
                arrow.append(nullSpan);
            }
            container.append(arrow);

            current = current.next;
        }
    }
}
