const removeFromArray = function(nums, ...args) {
    return nums.filter(function(num) {
        for (let i = 0; i < args.length; i++) {
            if (num === args[i]) {
                return false;
            }
        }
        return true;
    })
};

// Do not edit below this line
module.exports = removeFromArray;
