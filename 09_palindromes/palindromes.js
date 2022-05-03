const palindromes = function (str) {
    let arr = str.toLowerCase().split('');
    let newArr = arr.filter(char => {
      const letters = /[a-z]/
      return letters.test(char)
    })
    let newStr = newArr.join('');
    newArr.reverse();
    let revStr = newArr.join('');
    return newStr == revStr;  
};

// Do not edit below this line
module.exports = palindromes;
