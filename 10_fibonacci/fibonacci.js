const fibonacci = function(num) {
    num = parseInt(num, 10);
    if (num > 0) {
        let num1 = 0;
        let num2 = 1;
        let fibNum = 1;
        for (let i = 1; i < num; i++) {
            fibNum = num1 + num2;
            num1 = num2;
            num2 = fibNum;
        }
        return fibNum;
    }
    return 'OOPS';
};

// Do not edit below this line
module.exports = fibonacci;
