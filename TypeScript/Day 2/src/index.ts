/* Tuple in TypeScript */

function userDetails() {
    let name:string = "John";
    let age: number = 28;
    let isMarried:boolean = true;

    let userDetailsTuple:[string, number, boolean] 
    = [name, age, isMarried];
    return userDetailsTuple;
}

console.log(userDetails());

/* Enum in TypeScript */

enum DaysOfWeek {
    MONDAY=1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

console.log(DaysOfWeek.MONDAY);
console.log(DaysOfWeek.THURSDAY);

enum SIZE {
    SMALL="S",
    MEDIUM="M",
    LARGE="L"
}

let largeSize = SIZE.LARGE;
console.log(largeSize);
console.log(SIZE);


/* Functions in TypeScript */

function driver() { //the default value undefined, the default return type is viod

}

console.log(driver());

function sum(num1:number, num2=30): number {
    let x = 10;
    if(num1 < 40) 
        return num1 + num2;
    return num2;
}

sum(10, 50);