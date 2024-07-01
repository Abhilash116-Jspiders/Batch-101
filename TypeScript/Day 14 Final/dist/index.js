"use strict";
// import { Circle, Rectangle } from './shapes';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shapes_1 = require("./shapes");
const vehicle_1 = __importDefault(require("./vehicle"));
const Animal = __importStar(require("./animals"));
// import {Person}  from './models/person';
// import {Student} from './models/student';
// import { Employee } from "./models/employee";
const index_1 = require("./models/index");
let circle = new shapes_1.Circle(10);
let rectangle = new shapes_1.Rectangle(10, 20);
console.log(circle);
console.log(rectangle);
let bike = new vehicle_1.default();
console.log(bike);
let dog = new Animal.Dog();
let cat = new Animal.Cat();
console.log(dog);
console.log(cat);
let person = new index_1.Person();
let student = new index_1.Student();
let employee = new index_1.Employee();
console.log(person, student, employee);
