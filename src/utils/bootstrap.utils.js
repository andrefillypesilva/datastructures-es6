export class Bootstrap {
    constructor() { }

    createScreen() {
        const body = document.querySelector('body');
        const children = [...body.children];
        const components = children.map(child => {
            return child.id;
        }).filter(component => component);

        for (component of components) {
            fetch(`./components/${component}.html`)
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    document.getElementById(component).innerHTML = data;
                });
        }
    }

    createDOMEvents(element) {
        const arrayInputEl = document.getElementById('arrayInput');

        const showArrayButton = document.getElementById('showArrayButton');
        showArrayButton.addEventListener('click', () => {
            this.promptMessage('See array', element.join(' - '));
        });

        const pushArrayButton = document.getElementById('pushArrayButton');
        pushArrayButton.addEventListener('click', () => {
            element.push(arrayInputEl.value);

            this.promptMessage('Push element into array', element.join(' - '));
        });

        const findArrayButton = document.getElementById('findArrayButton');
        findArrayButton.addEventListener('click', () => {
            this.promptMessage('Find element into array', element.find(arrayInputEl.value));
        });

        const unshiftArrayButton = document.getElementById('unshiftArrayButton');
        unshiftArrayButton.addEventListener('click', () => {
            element.unshift(arrayInputEl.value);

            this.promptMessage('Unshift element into array', element.join(' - '));
        });

        const lengthArrayButton = document.getElementById('lengthArrayButton');
        lengthArrayButton.addEventListener('click', () => {
            this.promptMessage('See array length', element.length());
        });

        const getArrayButton = document.getElementById('getArrayButton');
        getArrayButton.addEventListener('click', () => {
            this.promptMessage('Get an element from array', element.get(arrayInputEl.value));
        });

        const updateArrayButton = document.getElementById('updateArrayButton');
        const updateArrayInput = document.getElementById('updateArrayInput');
        const updateArrayIndexInput = document.getElementById('updateArrayIndexInput');

        updateArrayButton.addEventListener('click', () => {
            element.update(updateArrayIndexInput.value, updateArrayInput.value);

            this.promptMessage('Update an array element', element.join(' - '));
        });

        const popArrayButton = document.getElementById('popArrayButton');
        popArrayButton.addEventListener('click', () => {
            element.pop();
            
            this.promptMessage('Pop element from array', element.join(' - '));
        });

        const shiftArrayButton = document.getElementById('shiftArrayButton');
        shiftArrayButton.addEventListener('click', () => {
            element.shift();
            
            this.promptMessage('Shift element from array', element.join(' - '));
        });
    }

    promptMessage(message, element) {
        const promptContainerEl = document.getElementsByClassName('array__terminal-prompt')[0];
        const promptEl = document.getElementsByClassName('array__terminal-prompt--old-commands')[0];
        const currentLineEl = document.getElementsByClassName('terminal-prompt__current-line')[0];
        currentLineEl.innerHTML = message;

        setTimeout(() => {
            const instruction = document.createElement('span');
            instruction.innerHTML = `> ${message}`;
            promptEl.append(instruction);

            const alert = document.createElement('a');
            alert.setAttribute('href', '#');
            alert.innerHTML = element;
            promptEl.append(alert);

            currentLineEl.innerHTML = '';

            promptContainerEl.scrollTop = promptContainerEl.scrollHeight;
        }, 500);
    }
}
