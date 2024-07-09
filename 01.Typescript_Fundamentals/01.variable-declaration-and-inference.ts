// variable declaration and inference 
let temperature = 6; // on hover let temperature:number -> inference

// temperature = "warn" type checking

// const  humidity = 79 as 79; litral type
let humidity = 79 as const // casting 

// A type as a set of allowed values 
temperature  = 28;
temperature = humidity;
// humidity = temperature; number is not type `79`
// humidity = 79;
// humidity = 78;

let temperature2 = 79; // type is {all numbers}
let humidity2 = 79 as const; // type is {79}
temperature2 = 23;
// humidity2 = 89; is each member in {89} also in {79}
// implicit 'any' and type annotations
let x = 10 as 79;
// x = 90;
// x = 79;
x

// implicit any and type annotations.
export const RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;
let startTime = new Date();
let endTime:Date; // type annotations.
setTimeout(() => {
    endTime = new Date();
},RANDOM_WAIT_TIME);


// type casting 

let frontendMastersFounding = new Date("Jan 1 2012");

let date1 = frontendMastersFounding;
let date2 = frontendMastersFounding as any;

const humidity3 = 79 as number;

let date3 = "oops" as any as  Date // typescript thinks thos os a Date now but iut is really a string
// date3.toISOString() // what do we think will happen when we run this?

// function arguments and return value

function add(a:number,b:number):number{
    // if(Math.random() > 0.5){
    //     return a+b;
    // }
    return a+b; 
}

const result = add(2,4);
console.log(result.toExponential())
// const p = new Promise(result); type must be callback not a number.

// typescript vs eslint 
// typescript is all about type checking 
// eslint is all about best practices and code style


export default {};