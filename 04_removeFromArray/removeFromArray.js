const removeFromArray = function (arr, ...value) {
    let values = [...value];

    for (let j = 0; j < values.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === values[j]) {
                arr.splice(i, 1);
            }
        }
    }

    return arr;
};


// Do not edit below this line
module.exports = removeFromArray;
