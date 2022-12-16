


const palindromes = function (str) {
    let filteredStr = str.split('').filter(function (val) {
        return /[a-zA-Z]+$/.test(val);
    })

    let reverse = [];
    for (let i = str.length - 1; i >= 0; i--) {
        if (/[a-zA-Z]+$/.test(str[i])) {
            reverse.push(str[i]);
        }
    }

    return filteredStr.join('').toUpperCase() === reverse.join('').toUpperCase();
};

// Do not edit below this line
module.exports = palindromes;
