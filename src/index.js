class Sorter {
    constructor() {
        this.arr = [];
        this.compareFunction = null;
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return this.arr;
    }

//takes indices of already added elements and sorts *only* these elements
    sort(indices) {
        let arrTemp = [];

        this.customSort(indices);

        for (let i = 0; i < indices.length; i++) {
            arrTemp.push(this.arr[indices[i]]);
        }
        if (this.compareFunction) {
            arrTemp.sort(this.compareFunction);
        }
        else {
            this.customSort(arrTemp);
        }

        for (let i = 0; i < indices.length; i++) {
            this.arr[indices[i]] = arrTemp[i];
        }
    }

    customSort(arr) {
        for (let i = 0, endI = arr.length - 1; i < endI; i++) {
            for (let j = 0, endJ = endI - i; j < endJ; j++) {

                if (arr[j] > arr[j + 1]) {
                    let swap = arr[j];

                    arr[j] = arr[j + 1];
                    arr[j + 1] = swap;
                }
            }
        }
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}

module.exports = Sorter;