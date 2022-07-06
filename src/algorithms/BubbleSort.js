const BubbleSort = (arr, delaySetArr) => {
    let arrCopy = arr.slice();
    let sorted = false;
    let count = 0;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arrCopy.length - 1; i++) {
            if (arrCopy[i] > arrCopy[i + 1]) {
                [arrCopy[i], arrCopy[i + 1]] = [arrCopy[i + 1], arrCopy[i]];
                sorted = false;
                delaySetArr(arrCopy.slice(), count, i + 1);
                count++;
            }
        }
    }
};

export default BubbleSort;
