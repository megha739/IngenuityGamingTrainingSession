"use strict";
function add(...input) {
    let sum = 0;
    let i;
    for (i of input) {
        sum += i;
    }
    return sum;
}
console.log("sum is ", add(1, 2));
console.log("sum is ", add(1, 2, 3));
console.log("sum is ", add(1, 2, 3, 4, 5));
