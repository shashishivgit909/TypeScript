let age: number = 25;
if (age > 20) {
    age += 10;
}
console.log(age);

// # playing with primitive datatype in typescript
//for large number we can sepearte number with "_" for code readeability

let salary = 123_456; // keeping mouse over this variabe show salary as number type by self consideer from value 
//above salary will be as " let salary=123456" in  mapped index.js file just above file
let height; // this will eb taken as type for height variable as any , 
height = 3; // since any type so here takes number as value , and just below takes string as value , so its voilates core cause of use of typescript (i.e here type is not static , avoid to use any type in typescript , VVI : it is not error)
height = "sh";
console.log(salary);


// see "TypeScript Type " from javatpoint for typecript 

//1.Topic :   Arrays 
let num = [1, 2, 3, '4'];  // typescript consider :"let num: (string | number)[] " i.e its says num is an array conatins numbers or string 
let num1: number[] = [1, 2, 3, 4] // num1 is an array of number  

//  let a={age:23};
//  a.name="shashi";

//by this way declaratin of array in typescript , follows (array  can store different datatypes  same as in js)
let a = [];
a.push(1);
a.push('shashi');
console.log(a, "array a");

// typescript , here  we specify type array cab store so act as typescript array , store same datatype , but size is dynamic
let b: number[] = [1, 2, 3, 4];
//b.push("shashi"); // here it gives error becouse , b is array of type number , by this ine we are pushing string so error
b.push(5); // 
console.log(b, "array: b");


//####function : 
//1.type_1 : Function Declarations:
function add(a: number, b?: number): number { //here "b" is optional so" b" is undefined  so two way to handle it :  either:" b" should be given default value  OR before using b inside function nned to check if "b" is undedefined or not  if we declare it as optional using ?
    // NOte  giving default value ,optional sign "? " not needed 
    if (b) // means if b is not undefined
        return a + b;
    else return 0;
}

add(2, 3);
//NOte: we can give as type either in params or return when type is unknown to us.
//explain:"a: number, b: number" tells, add function accepts 2 params of type number  and last ":number " , shows return type of function add

//2.type2: Function Expressions:
const multiply = function (a: number, b: number): number {
    return a * b;
};
//3: Arrow Functions:
// const divide = (a: number, b: number): number =>{return a / b}; // nned to return some value since we have specifies return type 
const divide = (a: number, b: number): void => { console.log("hari") };

const sum = (a: number, b: number): number => {
    // More than one line of code
    const result = a + b;
    console.log(result);
    return result;
};


//4: Optional and Default Parameters:
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

//## 2.topic: Tupple: 
//In TypeScript, a tuple is a data structure that allows you to store a fixed-size ordered collection of elements,
// where each element can have a different data type. Tuples are similar to arrays, but they have a specific and fixed order for their elements, and the type of each element is explicitly defined.

//Code: Here's a basic example of a tuple:
// Declare a tuple type
let myTuple: [string, number, boolean];

// Initialize the tuple
myTuple = ["hello", 42, true];

// Access elements by index
let str: string = myTuple[0];    // "hello"
let num2: number = myTuple[1];    // 42
let bool: boolean = myTuple[2];  // true
console.log(str);
console.log(num2);

//note: 
/*
While tuples in TypeScript share some similarities with arrays, not all array methods work on tuples. Tuples have a fixed length, 
and the types of their elements are explicitly defined. As a result,some array methods that modify the length or type of elements may not be applicable to tuples.
1: Array Methods that Change Length:
Methods like push, pop, shift, and unshift that change the length of an array are not applicable to tuples because tuples have a fixed length.
2.Methods like splice and reverse that modify elements in place are not allowed on tuples because tuples have a fixed structure.
 3. VVI: Array Methods That Create a New Array:
Methods like map, filter, and concat can be used on tuples, but they won't modify the original tuple. Instead, they will return a new array or tuple.
*/


//####   Topic: Objects

//  Objects used as map as we do in C++
// Creating an object with key-value pairs
let myObject: { [key: string]: number } = {
    "age": 25,
    "height": 180,
    "weight": 75,
};

// Accessing values by key
console.log(myObject.age);       // 25
console.log(myObject.height);    // 180
console.log(myObject.weight);    // 75

// Modifying values
myObject.age = 26;
myObject["height"] = 185;

// Adding a new key-value pair
myObject.gender = 1;

// Object with mixed types  , here we are defining types of {key:value} pair of object.
let mixedObject: { [key: string]: number | string | object } = {
    "age": 25,
    "name": "John",
    "details": { Id: "hgdfwgd", age: 24 }  //here used object as value
};

console.log(mixedObject, "line 124");

//VVI : in Typescript , object are not dynamic  unlike Javascript
// let obj={age:12};
// obj.name="shashi"; // this gives error :" Property 'name' does not exist on type '{ age: number; }' " i.e we cannot add key value after decla
let obj: { [key: string]: number | any } = {};
obj.name = "shashi";
obj.age = 24;
console.log(obj, "line 136");

//we can provide type to object as below also: 
let obj1 = {

}


//### Topic: Interfaces and Types:

/*
=>
In TypeScript, the type keyword is used to declare a new type, allowing you to create complex and reusable type definitions.
 There are two primary ways to create types in TypeScript: using the type keyword and using the interface keyword.
 TypeScript introduces interfaces and type aliases, providing a way to define custom data structures. When working with APIs, you can use interfaces to describe the shape of request and response objects.
Example using interface for an API response:*/

interface User {
    username: string;
    id: number;
}

const users: User[] = [
    { id: 1, username: 'john_doe' },
    { id: 2, username: 'jane_smith' },
];
// this users array of objects can be used to sent or other works



// note both type and interface have same purpose.


//################## Topic: Interface
/*  Definition: An interface is a way to define a contract for the shape of an object. It allows you to specify the properties and 
their types that an object should have. Interfaces are particularly useful for ensuring that objects adhere to a 
certain structure, making your code more predictable, maintainable, and easier to understand.  */

//Eg: 
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    incAge: () => number // this state that incAge is a function which has no params and returns number
}

const myFriend: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    incAge: () => {
        return age + 1;
    },
};
//function greeting(student: any): string { // here make anyto accept "anyType"  argument in function as greting
function greeting(student: Student): string {
    return `Hello, ${student.firstName} ${student.lastName}!`;
}

console.log(myFriend.incAge);


console.log(greeting(myFriend)); // Output: Hello, John Doe!


//#####################################################################################################################################################

//Generic :   used insted of any : In type script we try to avoid use of any .

//by any :
//here type of argument and  type of value returning is also unknown  so used any in both place 
const fun = (t: any): any => {
    return t;
}

//with  help og generic in above function   , mainly we use <T> inplace of custom type 
const fun1 = <CustomType>(t1: CustomType): CustomType => {
    return t1;
};

const ans=fun1(20);// here considering fun1 taking input of number and return type also as number
const ans1=fun1("shashi"); //here takes as string 

//2nd concept:  we can give interface or type  also in  place of custom type ,since we make custom type by using interface and type 
interface Doctor{
    name:string,
    age:number
}

const D1:Doctor={
name:"harish",
age:45
}

const fun2 = <D1>(t1: D1): D1 => {
    return t1;
};

const ans3=fun2(D1);
const ans4=<Doctor>fun2(D1); // we  are mentioning that we are sending D1 to fun2 which is a Doctor type  , this is good way but  above also works 




// ##################################################################################################################

//ENUM :  It is a simple collection of constant values 
//use of enum: If we want to restrict the userchoice with the value provided then we provide those values in enum.
 
//LET WE HAVE 4 TYPES SEAT AVALIABLE IN PLANE WHCIH ARE MENTIONED IN ENUM , NOW WHEN WE ASSIGN SEAT THEN WE USE ENUM AND ASSIG FROM ENUM
// enum SeatChoice{
//     AISLE,  //by default:AISLE=0   // by default values of element is numeric strating from 0 and then goes on incresing by 1 as gone below elements.But if we assign a value to element as X then next elements get value  in ascending order.we acn  assign value to any element ,but note  after that element value goes on increasing order(by+1). 
//     WINDOW, //window=1
//     MIDDLE,// window =2   ans so on as gone below    
//     FOOUTH,
// }
// const hcSeat=SeatChoice.AISLE; // while hitting "SeatChoice." we got option as all elements mentioned in enum to assign .

// if we give string as value then element after that cannot  get value since +1 done on numeric valye so we need to give value manually to  subsequent elements after that , oterwise error shows.

enum SeatChoice{
    AISLE="shashi",  
    WINDOW=5, 
    MIDDLE="hari",   
    FOOUTH=8,
}
const hcSeat=SeatChoice.AISLE; 

//Note VVI:   When  we run above enum code then  acomplex code got generated in .js file . But to make code in easy way in js we  add const  before defining enum.Sometime we Need to go to typescript to chnage code since, by making chnage in typescript wonot works better , in that case we nned clear code in js for our code in typescript. 

