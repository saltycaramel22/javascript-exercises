const reverseString = function(str) {
    let rstring = '';
    for (let s = str.length - 1; s >= 0; s--) {
        rstring += str[s];
    }
    return rstring
};

console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
