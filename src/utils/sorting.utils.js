/**
 * @author André Fillype Silva <andrefillype10@gmail.com>
 * @description Implementation of sorting algorithms.
 */
export class Sorting {
    /**
     * Swaps the values for two elements in the provided array.
     * @public
     * @param {Array} array 
     * @param {number} i 
     * @param {number} j 
     * @returns {Array}
     */
    changeNumberOfPosition(array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;

        return array;
    }

    /**
     * Sorts array values using Quick Sort algorithm.
     * @public
     * @param {Array} array 
     * @param {number} left 
     * @param {number} right 
     */
    quickSort(array, left, right) {
        if (left < right) {
            const pivot = right;
            let i = left;

            for (let j = left; j < right; j++) {
                if (array[pivot] > array[j]) {
                    this.changeNumberOfPosition(array, i, j);
                    i++;
                }
            }

            this.changeNumberOfPosition(array, pivot, i);

            this.quickSort(array, left, i - 1);
            this.quickSort(array, i + 1, right);
        }
    }
}
