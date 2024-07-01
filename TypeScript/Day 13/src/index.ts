function Component(constructor: Function) {
    console.log("Component Decorator is Called");
}

function Pipe(constructor: Function) {
    console.log("Pipe Decorator is Called");
}

@Component
@Pipe
class Person {

}

/* Method Decorator */
function Log(target: any, methodName: string, pD: PropertyDescriptor) {
    let originalPrintMsg = pD.value;
    pD.value = function(message: string) {
        console.log(`${methodName} execution started`)
        originalPrintMsg.call(this, message);
        console.log(`${methodName} execution ended`)

    }
}
class User {
    @Log
    printMessage(message: string) {
        console.log(message)
    }
}

let user = new User();
user.printMessage("Hello World");

/* Access Decorators */
function Capitalize(target: any, methodName: string, propDes: PropertyDescriptor) {
    let originalGet = propDes.get;
    propDes.get = function() {
        let returnedValue = originalGet?.call(this);
        if(typeof returnedValue === "string") 
            return returnedValue.toUpperCase();
        return returnedValue;
    }
}
class Student {
    constructor(public firstName: string, public lastName: string) {}
    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
let student = new Student("Conor", "Kelly");
console.log(student.fullName);

/* Property Decorator */
function MinLength(minLength: number) {
    return (target: any, propertyName: string) => {
        let val: string;
        let propDes: PropertyDescriptor = {
            set: (password: string) => {
                if(password.length < minLength)
                    throw new Error(`password should have atleast ${minLength} characters`);
               val = password; 
            },
            get: () => {
                return val;
            }
        }
        Object.defineProperty(target, propertyName,propDes);
    }
}
class Client {
    @MinLength(5)
    password: string;
    constructor(password: string) {
        this.password = password;
    }

}
let client = new Client("12345");
console.log(client.password);