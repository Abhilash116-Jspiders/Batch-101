// import { Circle, Rectangle } from './shapes';

import { Circle, Rectangle } from "./shapes";
import Bike from './vehicle';

import * as Animal from './animals';
// import {Person}  from './models/person';
// import {Student} from './models/student';
// import { Employee } from "./models/employee";
import {Person, Student, Employee} from './models/index'

let circle = new Circle(10);

let rectangle = new Rectangle(10, 20);

console.log(circle);
console.log(rectangle);

let bike = new Bike();
console.log(bike);

let dog = new Animal.Dog();
let cat = new Animal.Cat();
console.log(dog);
console.log(cat);

let person = new Person();
let student = new Student();
let employee = new Employee();
console.log(person, student, employee);