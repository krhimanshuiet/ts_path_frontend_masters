// type queries 

// keyof 
const contact = {
    name:"hks",
    email:"hks@gmail.com"
}

type WhatIWant = "name" | "email";
type Try1 = keyof typeof contact;
// keyof = Object.keys() for types
// typeof = get me the type of this value 
type DatePropertyNames = keyof Date

type DateStringPropertyNames = DatePropertyNames & string
type DateSymbolPropertyNames = DatePropertyNames & symbol

// typeof
async function main(){
    const apiResponse = await Promise.all([
        fetch("https://example.com"),
        Promise.resolve("Titanium White")
    ])
    // if(typeof apiResponse !== "undefined"){}
    type ApiResponseType = typeof apiResponse;
}

// type alias within a function scope
const MyRule = CSSRule;
CSSRule.STYLE_RULE
const myAjax = new MyRule();

type MyRuleType = typeof MyRule;

// indexed access types 

interface Car{
    make:string
    model:string
    year:string
    color:{
        red:string
        green:string
        blue:string
    }
}

let carColor:Car['color'] // reaching for something that exist 
// let carSomething:Car['not-something-on-car']  // does not exist 
let carColorRedComponent:Car['color']['red'] // reaching something nested
let carProperty:Car['color' | 'year'] // passing a union type through the index


// use case : the type registry pattern

declare module "./lib/registry" {

}