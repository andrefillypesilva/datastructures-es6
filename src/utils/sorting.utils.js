export class Sorting {
    changeNumberOfPosition(array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;

        return array;
    }

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
