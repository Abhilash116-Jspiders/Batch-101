"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(constructor) {
    console.log("Component Decorator is Called");
}
function Pipe(constructor) {
    console.log("Pipe Decorator is Called");
}
let Person = class Person {
};
Person = __decorate([
    Component,
    Pipe
], Person);
/* Method Decorator */
function Log(target, methodName, pD) {
    let originalPrintMsg = pD.value;
    pD.value = function (message) {
        console.log(`${methodName} execution started`);
        originalPrintMsg.call(this, message);
        console.log(`${methodName} execution ended`);
    };
}
class User {
    printMessage(message) {
        console.log(message);
    }
}
__decorate([
    Log
], User.prototype, "printMessage", null);
let user = new User();
user.printMessage("Hello World");
/* Access Decorators */
function Capitalize(target, methodName, propDes) {
    let originalGet = propDes.get;
    propDes.get = function () {
        let returnedValue = originalGet === null || originalGet === void 0 ? void 0 : originalGet.call(this);
        if (typeof returnedValue === "string")
            return returnedValue.toUpperCase();
        return returnedValue;
    };
}
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Student.prototype, "fullName", null);
let student = new Student("Conor", "Kelly");
console.log(student.fullName);
/* Property Decorator */
function MinLength(minLength) {
    return (target, propertyName) => {
        let val;
        let propDes = {
            set: (password) => {
                if (password.length < minLength)
                    throw new Error(`password should have atleast ${minLength} characters`);
                val = password;
            },
            get: () => {
                return val;
            }
        };
        Object.defineProperty(target, propertyName, propDes);
    };
}
class Client {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(5)
], Client.prototype, "password", void 0);
let client = new Client("12345");
console.log(client.password);
