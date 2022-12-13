const removeFromArray = function (arr, value) {
    let newArr = [];
    let indexToRemove = [];

    if (!Array.isArray(value)) {
        arr.forEach(elemento => {
            if (elemento != value) {
                newArr.push(elemento);
            }
        });
    } else {
        arr.forEach(elemento => {
            value.forEach((valor) => {
                if (elemento != valor) {
                    indexToRemove = indexToRemove.push(arr.indexOf(elemento));
                }
            });

        });
        indexToRemove = [...new Set(indexToRemove)];
        for (let k = 0; k < arr.length; k++) {
            for (let j = 0; j < value.length; j++) {
                if (k != indexToRemove[j]) {
                    newArr.push(arr[k]);
                }
            }
        }
    }

    return newArr;
};


// Do not edit below this line
module.exports = removeFromArray;
