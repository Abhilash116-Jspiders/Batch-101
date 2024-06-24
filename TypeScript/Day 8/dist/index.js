"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    draw() {
        console.log("Drawing Circle");
    }
}
class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color);
        this.width = width;
        this.height = height;
    }
    draw() {
        console.log("Drawing Rectangle");
    }
}
let circle = new Circle(10, "Green");
let rectangle = new Rectangle(10, 20, "Red");
console.log(circle);
console.log(rectangle);
class SMSNotification {
    constructor(message, recipient) {
        this.message = message;
        this.recipient = recipient;
    }
    sendNotification() {
        console.log(`Sending SMS Notification ${this.recipient} : ${this.message}`);
    }
}
class EmailNotification {
    constructor(message, recipient) {
        this.message = message;
        this.recipient = recipient;
    }
    sendNotification() {
        console.log(`Sending Email Notification ${this.recipient} : ${this.message}`);
    }
}
let smsNotification = new SMSNotification("Account Created ", "+916562355625");
let emailNotification = new EmailNotification("Account Created ", "jspiders@gmail.com");
console.log(smsNotification);
console.log(emailNotification);
/* Generic Class */
class KeyPair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let keyPair = new KeyPair("name", "John");
console.log(keyPair);
