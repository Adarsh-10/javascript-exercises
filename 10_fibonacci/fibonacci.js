const fibonacci = function(a) {
    if (a < 0) {
        return "OOPS";
    }
    let num1 = 1;
    let num2 = 1;

    if (a == 1) {
        return num1;
    }

    if (a == 2) {
        return num2;
    }

    let num3 = num1 + num2;
    for (let i = 3; i < a; i++) {
        let temp = num3;
        num3 = num2 + num3;
        num2 = temp;
    }

    return num3;
};

// Do not edit below this line
module.exports = fibonacci;
