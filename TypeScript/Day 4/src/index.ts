type Customer = {
    id: number,
    name: string,
    nickName?: string
}

let customer: Customer = {id: 1, name: "John"};

function getCustomerById(id: number) {
    return id === 0 ? null : customer;
}

let retrivedCustomer = getCustomerById(1);
if(retrivedCustomer !== null && retrivedCustomer !== undefined)
    console.log(retrivedCustomer.name);

console.log(retrivedCustomer?.nickName?.length);

/* Optional Element Access Operator */
let numbers: number[] | null = null;

console.log(numbers?.[0]);

/* Optional Function Call Operator */
function getGreetFunction(toReturn: boolean) {
    return toReturn ? () => console.log("Hello") : null;
}

let greet = getGreetFunction(false);

greet?.();

let speed: number | null = null;

function getSpeedOfBike() {
    // return speed !== null && speed !== undefined ? speed : 30;
    return speed ?? 30;
}

console.log(getSpeedOfBike())

function getSearchInputValue() {
    console.log((<HTMLInputElement>document.getElementById("search")).value);
    console.log((document.getElementById("search") as HTMLInputElement).value);
}

getSearchInputValue();

/*
function foo(message: any) {
    message.boo();
    message.printUsersData();
    message.whatEverYouWant();
}
    */

function foo(message: unknown) {
    if(typeof message === 'string')
        message.toLowerCase();
    else if(typeof message === 'number')
        message.valueOf();
}

foo("Hello");