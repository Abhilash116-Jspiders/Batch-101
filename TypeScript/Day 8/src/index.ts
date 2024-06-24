abstract class Shape {
    constructor(public color: string) {
    }
    abstract draw(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }
    override draw(): void {
        console.log("Drawing Circle");
    }
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number, color: string) {
        super(color);
    }

    override draw(): void {
        console.log("Drawing Rectangle");
    }
}

let circle: Circle = new Circle(10, "Green");

let rectangle: Rectangle = new Rectangle(10, 20, "Red");
console.log(circle);
console.log(rectangle);

/* Interface  */
interface UserNotification {
    message: string;
    recipient: string;
    sendNotification(): void;
}

class SMSNotification implements UserNotification{
    constructor(public message:string, public recipient: string) {
    }
    sendNotification(): void {
        console.log(`Sending SMS Notification ${this.recipient} : ${this.message}`);
    }
}

class EmailNotification implements UserNotification{
    message: string;
    recipient: string;
    constructor(message: string, recipient:string) {
        this.message = message;
        this.recipient = recipient;
    }
    sendNotification(): void {
        console.log(`Sending Email Notification ${this.recipient} : ${this.message}`);
    }
}
let smsNotification:SMSNotification = new SMSNotification("Account Created ", "+916562355625");
let emailNotification:EmailNotification = new EmailNotification("Account Created ", "jspiders@gmail.com");
console.log(smsNotification);
console.log(emailNotification);

/* Generic Class */

class KeyPair<K, V> {
    constructor(public key: K, public value: V) {

    }
}
let keyPair = new KeyPair<string, string>("name", "John");

console.log(keyPair);

/* Generic Function */

function printMessage<T>(message: T) {
    console.log(message);
}

printMessage<string>("Hello");
printMessage<number>(29);