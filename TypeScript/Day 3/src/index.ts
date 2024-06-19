/* 
Objects in TypeScript
*/

let user: {
    readonly id: number,
    name: string,
    age: number,
    nickName?: string
} = {
    id: 10,
    name: "John",
    age: 28
}

// user.age = 28

/* Type Alias */

type User = {
    readonly id: number,
    name: string,
    age: number,
    nickName?: string,
    greet: () => void
}

let user1:User = {
    id: 101,
    name: "Martin",
    age: 32,
    greet: () => console.log("Hello World")
}

let user2:User = {
    id: 102,
    name: "Andrew",
    age: 34,
    greet: () => console.log("Hello World")
}

/* Union Type in TypeScript
*/

function convertKgToLBS(weight: string | number):number {
    //Narrowing
    if(typeof weight === 'string') 
        return parseInt(weight) * 1.2;
    else 
        return weight * 1.2;
}

/* Intersection Type in TypeScript */

type Dragable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Dragable & Resizable;

let textBox: UIWidget = {
    drag: () => console.log("dragable"),
    resize: () => console.log("resizable")
}

/* Type Literal in TypeScript */
type Quantity = 50 | 100;

let quantity: Quantity = 100;