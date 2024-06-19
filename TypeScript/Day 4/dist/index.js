"use strict";
var _a;
let customer = { id: 1, name: "John" };
function getCustomerById(id) {
    return id === 0 ? null : customer;
}
let retrivedCustomer = getCustomerById(1);
if (retrivedCustomer !== null && retrivedCustomer !== undefined)
    console.log(retrivedCustomer.name);
console.log((_a = retrivedCustomer === null || retrivedCustomer === void 0 ? void 0 : retrivedCustomer.nickName) === null || _a === void 0 ? void 0 : _a.length);
/* Optional Element Access Operator */
let numbers = null;
console.log(numbers === null || numbers === void 0 ? void 0 : numbers[0]);
/* Optional Function Call Operator */
function getGreetFunction(toReturn) {
    return toReturn ? () => console.log("Hello") : null;
}
let greet = getGreetFunction(false);
greet === null || greet === void 0 ? void 0 : greet();
let speed = null;
function getSpeedOfBike() {
    // return speed !== null && speed !== undefined ? speed : 30;
    return speed !== null && speed !== void 0 ? speed : 30;
}
console.log(getSpeedOfBike());
function getSearchInputValue() {
    console.log(document.getElementById("search").value);
    console.log(document.getElementById("search").value);
}
getSearchInputValue();
