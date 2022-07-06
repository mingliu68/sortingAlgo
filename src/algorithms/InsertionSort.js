const InsertionSort = (arr, delaySetArr) => {
    let arrCopy = arr.slice();
    let count = 0;

    for (let i = 1; i < arrCopy.length; i++) {
        let index = i;
        while (index > 0 && arrCopy[index] < arrCopy[index - 1]) {
            [arrCopy[index], arrCopy[index - 1]] = [
                arrCopy[index - 1],
                arrCopy[index]
            ];
            delaySetArr(arrCopy.slice(), count, index - 1);
            count++;
        }
        index--;
    }
};

export default InsertionSort;
