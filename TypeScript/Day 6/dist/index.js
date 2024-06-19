"use strict";
/* Parameter Properties */
class User {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
}
let user1 = new User(20, "John");
console.log(user1);
/* Getter and Setter in TypeScript */
class Customer {
    get age() {
        return this._age;
    }
    set age(age) {
        if (age > 0 && age < 100)
            this._age = age;
    }
}
let customer1 = new Customer();
customer1.age = 20;
console.log(customer1.age);
/* Index Signature */
class UserForm {
}
let basicForm = new UserForm();
basicForm.name = "Stephen";
basicForm.age = 29;
basicForm.isMarried = true;
basicForm[0] = "stephen";
console.log(basicForm);
class Ride {
    start() {
        Ride.activeRides++;
    }
    end() {
        Ride.activeRides--;
    }
}
Ride.activeRides = 0;
let firstRide = new Ride();
firstRide.start();
let secondRide = new Ride();
secondRide.start();
console.log(Ride.activeRides);
