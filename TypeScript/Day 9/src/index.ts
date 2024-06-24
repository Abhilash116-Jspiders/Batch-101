/* Generic Interface */

interface Result<T> {
    data: T | null;
}

function getResult<T>(url: string) : Result<T> {
    return {data: null};
}

interface User {
    name: string
}

interface Product {
    title: string
}

let userResult: Result<User> = getResult<User>("http://myapp.com/user")
let productResult: Result<Product> = getResult<Product>("http://myapp.com/product")
console.log(userResult.data?.name);
console.log(productResult.data?.title)

/* Generic Constraints */
interface Vehicle {
    name: string
}
class Person {
    constructor(public name: string) {}
}
class Customer extends Person {
}
function echo<T>(message: T): T {
    return message;
}
function echoStringOrNumber<T extends string | number>(message: T): T {
    return message;
}
function echoPerson<T extends Person>(message: T): T {
    return message;
}
function echoPersonChildClasses<T extends Customer>(message: T): T {
    return message;
}
function echoVehicleInterface<T extends Vehicle>(message: T): T {
    return message;
}

echo<Person>(new Customer("John"));

/* Extending the Generic Class */

class Store<T> {
    objects: T[] = [];
}

/* Passing GenericType Parameter from Child Class to the Parent class */
class CompressibleStore<T> extends Store<T> {

}

/* Fixing  the Generic Type in the child class */
interface Employee {
    name: string;
}
class EmployeeStore extends Store<Employee> {

}
/* Restricting the Type in Child Class */
class SearchableStore<T extends Product | User> extends Store<T> {

}