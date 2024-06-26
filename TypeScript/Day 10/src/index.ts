
/* KeyOf Operator in TypeScript */
class User {
    constructor(public name: string, public age: number) {}
}
let user = new User("Michael", 30);

function getValue(propertyName: keyof User) { //"name" | "age"
    return user[propertyName];
}
getValue("name");
getValue("age");

/* TypeMapping */
interface Person {
    name: string;
    age: number;
}

type ReadOnlyPerson = {
    //keyof Person --> name , age
    //PropertyName = "name"
    //Person["name"] <-- string
    readonly [PropertyName in keyof Person]: Person[PropertyName]
}
let person: ReadOnlyPerson = {name: "John", age: 20}