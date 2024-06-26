/* Object Create method */
let student = Object.create({studId: 112}, {
    name: {value: "John"},
    age: {value: 29}
});
console.log(student);

/* Object defineProperty Method */
/* let user = {
    name: "John",
    printName: function() {
        console.log(this.name);
    }
} */
let user = {};
Object.defineProperty(user, "name", {
    value: "John",
    configurable: false,
    writable: false,
    enumerable: false
})
Object.defineProperty(user, "printName", {
    value: function() {
        console.log(this.name);
    }
})
console.log("Object Created Using defineProperty Method", user);
user.printName();

/* configurable property of Property Descriptor */
delete user.name;
console.log("Configurable is Set to true, The property should be deleted", user);
/* writable property of Property Descriptor */
user.name = "Abhi";
console.log("Writtable is set to true, The property should be modifiable ", user);
/* Enumerable property of Property Descriptor */
for(const propertyName in user) {
    console.log(propertyName);
}

/* get and set in Property Descriptor Object */
Object.defineProperty(user, "age", {
    get: function () {
        return age;
    },
    set: function (ageVal) {
        age = ageVal;
    },
    configurable: true,
    enumerable: true
});

console.log(user);
user.age = 29;
console.log("Age of User is ", user.age);

/* getOwnPropertyDescriptor */
let employee = {
    empId: 110
}

console.log(Object.getOwnPropertyDescriptor(employee, "empId"));

/* keys */
console.log(Object.keys(employee));
