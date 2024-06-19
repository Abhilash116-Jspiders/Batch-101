/* Parameter Properties */
class User {
    constructor(public age: number, public name: string) {
    }

}
let user1 = new User(20, "John");
console.log(user1);

/* Getter and Setter in TypeScript */

class Customer {
    private _age: number | undefined;

    get age(): number | undefined {
        return this._age;
    }

    set age(age: number) {
        if(age > 0 && age < 100)
            this._age = age;
    }

}

let customer1 = new Customer();
customer1.age = 20;
console.log(customer1.age);

/* Index Signature */

class UserForm {
    [userFormProperties: string]: any;
}

let basicForm = new UserForm();
basicForm.name = "Stephen";
basicForm.age = 29;
basicForm.isMarried = true;
basicForm[0] = "stephen";
console.log(basicForm);

/* Static Member in TypeScript */

class Ride {
    static activeRides: number = 0;
    start() {
        Ride.activeRides++;
    }

    end() {
        Ride.activeRides--;
    }
}

let firstRide = new Ride();
firstRide.start();
let secondRide = new Ride();
secondRide.start();
console.log(Ride.activeRides);