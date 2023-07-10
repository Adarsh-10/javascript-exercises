const removeFromArray = function() {
    let arr = arguments[0];
    
    for (let i = 1; i < arguments.length; i++) {
        let toRemove = arguments[i];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === toRemove) {
                arr.splice(j,1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
