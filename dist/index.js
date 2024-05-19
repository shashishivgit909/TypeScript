"use strict";
let age = 25;
if (age > 20) {
    age += 10;
}
console.log(age);
let salary = 123456;
let height;
height = 3;
height = "sh";
console.log(salary);
let num = [1, 2, 3, '4'];
let num1 = [1, 2, 3, 4];
let a = [];
a.push(1);
a.push('shashi');
console.log(a, "array a");
let b = [1, 2, 3, 4];
b.push(5);
console.log(b, "array: b");
function add(a, b) {
    if (b)
        return a + b;
    else
        return 0;
}
add(2, 3);
const multiply = function (a, b) {
    return a * b;
};
const divide = (a, b) => { console.log("hari"); };
const sum = (a, b) => {
    const result = a + b;
    console.log(result);
    return result;
};
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
let myTuple;
myTuple = ["hello", 42, true];
let str = myTuple[0];
let num2 = myTuple[1];
let bool = myTuple[2];
console.log(str);
console.log(num2);
let myObject = {
    "age": 25,
    "height": 180,
    "weight": 75,
};
console.log(myObject.age);
console.log(myObject.height);
console.log(myObject.weight);
myObject.age = 26;
myObject["height"] = 185;
myObject.gender = 1;
let mixedObject = {
    "age": 25,
    "name": "John",
    "details": { Id: "hgdfwgd", age: 24 }
};
console.log(mixedObject, "line 124");
let obj = {};
obj.name = "shashi";
obj.age = 24;
console.log(obj, "line 136");
let obj1 = {};
const users = [
    { id: 1, username: 'john_doe' },
    { id: 2, username: 'jane_smith' },
];
const myFriend = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    incAge: () => {
        return age + 1;
    },
};
function greeting(student) {
    return `Hello, ${student.firstName} ${student.lastName}!`;
}
console.log(myFriend.incAge(),"line 84");
console.log(greeting(myFriend));
//# sourceMappingURL=index.js.map