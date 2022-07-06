const SelectionSort = (arr, delaySetArr, delaySetMovement) => {
    let arrCopy = arr.slice();
    let count = 0;
    let minPoint;
    for (let i = 0; i < arrCopy.length - 1; i++) {
        minPoint = i;
        for (let j = i + 1; j < arrCopy.length; j++) {
            delaySetMovement(count, j, minPoint);
            count++;
            if (arrCopy[j] < arrCopy[minPoint]) {
                minPoint = j;
            }
        }
        if (minPoint !== i) {
            [arrCopy[i], arrCopy[minPoint]] = [arrCopy[minPoint], arrCopy[i]];
        }
        delaySetArr(arrCopy.slice(), count, minPoint);
        count++;
    }
};

export default SelectionSort;
