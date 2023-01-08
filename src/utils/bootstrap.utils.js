import { ArrayService } from "../modules/linear-data-structures/services/array.services";

export class Bootstrap {
    constructor() { }

    createScreen() {
        const main = document.getElementsByClassName('data-structures-playground__main')[0];
        const children = [...main.children];
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
        ArrayService.prototype.createArrayEvents(element);
    }
}
