const sumAll = function(num1, num2) {
    let sum = 0;

    if ((num1 || num2) < 0) {
        return "ERROR"
    }
    else if (((num1 || num2) % 1) != 0) {
        return "ERROR"
    }
    else if ((typeof(num1) != "number") || (typeof(num2) != "number")) {
        return "ERROR"
    }
    else {
        if (num1 > num2) {
            for (let i = num2; i <= num1; i++) {
                sum += i;
            }
            return sum;
        }
        else {
            for (let i = num1; i <= num2; i++) {
                sum += i;
            }
            return sum;
        }
    }
};

console.log(sumAll(4,1));

// Do not edit below this line
module.exports = sumAll;
