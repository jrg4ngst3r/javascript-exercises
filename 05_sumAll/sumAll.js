const sumAll = function (from, to) {
    let result = 0;
    if (from < 0 || to < 0) {
        return 'ERROR'
    } else if ((typeof from != "number") || typeof to != "number") {
        return 'ERROR';
    } else if (from > to) {
        for (let i = to; i <= from; i++) {
            result = result + i;
        }
    } else {
        for (let i = from; i <= to; i++) {
            result = result + i;
        }
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
