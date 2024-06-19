/* Nullable Type in TypeScript */

function printMessage(message: string | null | undefined) {
    console.log(message);
}

printMessage("Welcome");
printMessage(null);
printMessage(undefined);

/* Never Type in TypeScript */

function getEventMsgFromQueue(): never {
    while(true) {
        console.log("Getting event messages from the queue");
    }
}

// getEventMsgFromQueue();
console.log("End of Program");


/* OOP - Object Oriented Programming */
function printAccountInfo() {

}

class Account {
    private readonly id: number;
    public name: string;
    public age: number;
    nickName?: string;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    printAccountInfo() {
        console.log(`Account id: ${this.id}, Account name: ${this.name}`);
        this.printAge();
    }

    private printAge() {
        console.log(`Account Holder age is ${this.age} `);
    }
}

let account1 = new Account(101, "John", 29);
let account2 = new Account(102, "Ed", 30);


account1.printAccountInfo();
account2.printAccountInfo();