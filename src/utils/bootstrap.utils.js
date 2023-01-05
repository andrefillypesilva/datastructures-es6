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
}
