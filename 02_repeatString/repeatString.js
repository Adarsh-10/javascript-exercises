const repeatString = function(stringArg, num) {
    let returnStatement = ""
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        returnStatement += stringArg;
    }
    return returnStatement;
};

// Do not edit below this line
module.exports = repeatString;
