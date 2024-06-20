"use strict";
class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    walk() { console.log("Walking"); }
    fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}
class Student extends Person {
    constructor(studId, firstname, lastname, age) {
        super(firstname, lastname, age);
        this.studId = studId;
    }
    learn() { console.log("Learning"); }
    fullName() {
        return `Student: ${super.fullName()}`;
    }
}
class Trainer extends Person {
    constructor(trainerId, firstname, lastname, age) {
        super(firstname, lastname, age);
        this.trainerId = trainerId;
    }
    traine() { console.log("Training"); }
    fullName() {
        return `Trainer: ${super.fullName()}`;
    }
}
let student = new Student(111, "Conor", "Kelly", 30);
console.log(student);
console.log(student.fullName());
let trainer = new Trainer(102, "Simon", "Mchagey", 40);
console.log(trainer);
console.log(trainer.fullName());
let persons = [student, trainer];
function printFullName(persons) {
    for (let person of persons) {
        console.log(person.fullName());
    }
}
printFullName(persons);
let person1 = new Student(111, "John", "Smith", 29);
let student1 = person1;
class Employee {
    constructor(name, departmentName) {
        this.name = name;
        this.departmentName = departmentName;
    }
    printDepartment() {
        console.log(this.departmentName);
    }
}
class Manager extends Employee {
    constructor(reports, name, departmentName) {
        super(name, departmentName);
        this.reports = reports;
    }
    printManagerDetails() {
        console.log("Manager Name: " + this.name);
        super.printDepartment();
    }
    getManagerDetails() {
        this.printManagerDetails();
    }
}
let emp = new Employee("John", "HR");
let manager = new Manager(["John", "Denis"], "Simon", "Engineering");
manager.getManagerDetails();
