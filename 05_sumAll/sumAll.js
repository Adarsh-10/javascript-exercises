const sumAll = function() {
    let start = arguments[0];
    let end = arguments[1];
    if (!Number.isInteger(start) || !Number.isInteger(end)
        || start < 0 || end < 0) {
            return "ERROR";
    }

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
