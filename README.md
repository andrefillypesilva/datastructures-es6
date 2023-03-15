# Data Structures Playground
Implementation of the most common data structures in Javascript (ES6+), including linear and non-linear ones, such as `Array`, `Linked List`, `Queue`, `Stack` and `Binary Tree`.

Futhermore, you will find here implementation of some interesting algorithms like `QuickSort` for sorting arrays and `Breadth First Search` for binary trees.

## Instalation
### If you want to use this lib into your personal project
```bash
npm i data-structures-playground
```
### If you want to clone and run in your computer
After clone this repository you will need to run `npm i` to install all dependencies.

## How to use this lib
1. After install the package on your personal project, you may import the code in your files:
```javascript
import {
    Array,
    LinkedList,
    Queue,
    Stack,
} from 'data-structures-playground/src/modules/linear-data-structures/linear-data-structures.module.js';

import { BinaryTree } from 'data-structures-playground/src/modules/non-linear-data-structures/components/binary-tree/binary-tree.component.js';
```

2. Creating and using `data structures` (examples).
#### Array
```javascript
const array = new Array();
array.push(10);
array.push(6);
array.push(2);

array.sort();

console.log(array.toString());
```
#### Linked List
```javascript
const linkedList = new LinkedList();
linkedList.prepend(444);
linkedList.append(3);
linkedList.insert(1, 22);
linkedList.delete(0);

console.log(linkedList.get());
```

#### Queue
```javascript
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.dequeue();
queue.dequeue();

let currentQueueItem = queue.peek();
while (currentQueueItem) {
    console.log(currentQueueItem.value);
    currentQueueItem = currentQueueItem.next;
}
```

#### Stack
```javascript
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.pop();
stack.pop();

let currentStackItem = stack.peek();
while (currentStackItem) {
    console.log(currentStackItem.value);
    currentStackItem = currentStackItem.next;
}
```
## How to play this application if you want to clone to your computer
To run this application you will need only run `npm run serve`.

An initial data structure will be generated when the application starts off. Then you can manipulate this data structure inserting information in the inputs and choosing an action by the buttons.

![Application Example](https://github.com/andrefillypesilva/data-structures-playground/blob/main/application_example.jpg?raw=true)

### Available methods
**ARRAY**
- **get(index?: number)**: returns the element value for a provided index or returns the entire array in case you do not provide an index.
- **push(value: any)**: pushes the provided value in the current array.
- **length()**: returns the length of the current array.
- **pop()**: removes the last element in the current array and returns it.
- **update(index: number, value: any)**: updates the value for a new provided one in the provided index.
- **shift()**: removes the first element in the current array and returns the resulting array.
- **unshift(value: any)**: inserts the provided value in the beginning of the current array.
- **find(value: any)**: if the current array has the provided value, it returns the finded index, else it returns -1.
- **sort()**: returns the sorted array, using ```Quick sort``` algorithm.
- **toString()**: returns the entire array in a `string` format.
- **join(term: string)**: join all values of the current array into a string, separated by the provided term.
- **concat(term: Array | any)**: concat the current array with a provided term (it can be any value or other Array).
- **splice(startIndex: number, quantityToDelete: number, items: any)**: returns a new array with the provided value inserted in the provided index, shifting the remaining elements to right. However, if you provide a ```n``` value greater than zero in the ```quantity to delete``` argument, it will delete the ```n``` elements after the provided index and replace the value instead of them.
- **slice(startIndex: number, endIndex?: number)**: returns a slice of the current array, based on the start/end indexes provided (if you do not provide the end index, it will consider the length of the current array).

**LINKED LIST**
- **prepend(value: any)**: inserts the provided element in the beginning of the linked list and this element becomes the ```head```.
- **append(value: any)**: inserts the provided element in the end of the linked list and this element becomes the ```tail```.
- **lookup(value: any)**: finds the provided element in the linked list.
- **insert(position: number, value: any)**: inserts the provided element in the provided position.
- **delete(position: number)**: removes an element from the provided position.
- **get()**: returns a string containing the entire linked list.

**QUEUE**
- **enqueue(value: any)**: inserts the selected value in the end of the queue.
- **dequeue()**: removes the first element of the queue.
- **lookup(value: any)**: finds the selected element in the queue and return it.
- **peek()**: return the first element of the queue.

**STACK**
- **push(value: any)**: inserts the provided value in the top of the stack.
- **pop()**: removes the element in the top of the stack.
- **lookup(value: any)**: finds the provided element in the stack.
- **peek()**: return the element in the top of the stack.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
