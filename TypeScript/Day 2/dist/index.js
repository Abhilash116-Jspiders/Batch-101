"use strict";
/* Tuple in TypeScript */
function userDetails() {
    let name = "John";
    let age = 28;
    let isMarried = true;
    let userDetailsTuple = [name, age, isMarried];
    return userDetailsTuple;
}
console.log(userDetails());
/* Enum in TypeScript */
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["MONDAY"] = 1] = "MONDAY";
    DaysOfWeek[DaysOfWeek["TUESDAY"] = 2] = "TUESDAY";
    DaysOfWeek[DaysOfWeek["WEDNESDAY"] = 3] = "WEDNESDAY";
    DaysOfWeek[DaysOfWeek["THURSDAY"] = 4] = "THURSDAY";
    DaysOfWeek[DaysOfWeek["FRIDAY"] = 5] = "FRIDAY";
    DaysOfWeek[DaysOfWeek["SATURDAY"] = 6] = "SATURDAY";
    DaysOfWeek[DaysOfWeek["SUNDAY"] = 7] = "SUNDAY";
})(DaysOfWeek || (DaysOfWeek = {}));
console.log(DaysOfWeek.MONDAY);
console.log(DaysOfWeek.THURSDAY);
var SIZE;
(function (SIZE) {
    SIZE["SMALL"] = "S";
    SIZE["MEDIUM"] = "M";
    SIZE["LARGE"] = "L";
})(SIZE || (SIZE = {}));
let largeSize = SIZE.LARGE;
console.log(largeSize);
console.log(SIZE);
/* Functions in TypeScript */
function driver() {
}
console.log(driver());
