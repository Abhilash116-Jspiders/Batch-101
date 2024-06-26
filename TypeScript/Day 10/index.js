let user = {};
console.log(user);
let numbers = [];
console.log(numbers);

/* Prototype in Custom Classes */

class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printName() {
        console.log(this.name);
    }
}
let person = new Person("John", 29);
console.log(person);

/* Object class Methods */
/* create */
let customer = Object.create({
    name: "John", 
    age: 30
})
console.log("Customer Object -> ", customer);

/* assign */
let studentDetails = {
    name: "John",
    age: 29
}
let student = {
    studId: 199
}

Object.assign(student, studentDetails);
console.log("Using Assign to copy properties from studentDetails to student", student);

/* Freeze Method from Object class */
Object.freeze(student);

delete student.studId;
console.log(student);

/* Freeze Method from Object class */
Object.seal(student);

student.fatherName = "Denis";

console.log(student);