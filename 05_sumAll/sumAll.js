const sumAll = function(num1, num2) {
    let sum = 0;
    let startNum = 0;
    let endNum = 0;

    if ((num1 < 0 || !Number.isInteger(num1)) || (num2 < 0 || !Number.isInteger(num2))) {
        return 'ERROR'
    }

    if (num1 <= num2) {
        startNum = num1;
        endNum = num2;
    } else {
        startNum = num2;
        endNum = num1;
    }
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
