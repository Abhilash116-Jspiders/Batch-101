class Person {
    constructor(public firstname: string, public lastname: string, public age: number) {
    }
    walk() {console.log("Walking");}
    fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}

class Student extends Person {
    constructor(public studId: number, firstname: string, lastname: string, age: number) {
        super(firstname, lastname, age);
    }
    learn() {console.log("Learning")}
    override fullName() {
        return `Student: ${super.fullName()}`;
    }
}

class Trainer extends Person {
    constructor(public trainerId: number, firstname: string, lastname: string, age: number) {
        super(firstname, lastname, age);
    }
    traine() {console.log("Training");}

    override fullName() {
        return `Trainer: ${super.fullName()}`;
    }
}

let student: Student = new Student(111, "Conor", "Kelly", 30);
console.log(student);
console.log(student.fullName());
let trainer: Trainer = new Trainer(102, "Simon", "Mchagey", 40);
console.log(trainer);
console.log(trainer.fullName());

let persons: Person[] = [student, trainer];

function printFullName(persons: Person[]) {
    for(let person of persons) {
        console.log(person.fullName());
    }
}

printFullName(persons);

let person1: Person = new Student(111, "John", "Smith", 29);
let student1: Student = person1 as Student;

class Employee {
    constructor(protected name: string, protected departmentName: string) {
    }
    protected printDepartment() {
        console.log(this.departmentName);
    }
}

class Manager extends Employee {
    constructor(public reports: string[], name: string, departmentName: string) {
        super(name, departmentName);
    }
    protected printManagerDetails() {
        console.log("Manager Name: "+this.name);
        super.printDepartment();
    }
    public getManagerDetails() {
        this.printManagerDetails();
    }
}
let emp = new Employee("John", "HR");
let manager = new Manager(["John", "Denis"], "Simon", "Engineering");
manager.getManagerDetails();
