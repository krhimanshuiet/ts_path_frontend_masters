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

class Human {
    eat = ():void => {
        console.log("i can eat")
    }
    sleep = ():void => {
        console.log("i can sleep")
    }
}

type HumanType = Human & string

// const me:HumanType = "me"


// indexed access types 

interface Car{
    make:string
    model:string
    year:number
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

// callables

interface TwoNumberCalculation{
    (x:number,y:number):number
}

type TwoNumberCalc = (x:number,y:number) => number

const add:TwoNumberCalculation = (x,y) => x + y
const subtract:TwoNumberCalc = (x,y) => x -y;
// void type 
function printFormattedJSON(obj:string[]):void {
    console.log(JSON.stringify(obj));
}
const xx:void = undefined;
const x = printFormattedJSON(["hks"]);

function foo():void{
    return undefined;
}

function invokeInFourSeconds(callback:() => undefined){
    setTimeout(callback,4000);
}

function invokeInFiveSeconds(callback:() => void){
    setTimeout(callback,5000)
}

const values:Array<number> = [];
// invokeInFourSeconds(() => values.push(4)) // type undefined is not assinable to number since push returns number
invokeInFiveSeconds(() => values.push(4)) // void means to ignore my return value

// constructables and function overloads

interface DateConstructor{
    new(value:number):Date // newables
}

let MyDateConstructor:DateConstructor = Date;
const d = new MyDateConstructor(12292992);


// function overload

type FormSubmitHandler = (data:FormData) => void
type MessageHandler = (data:MessageEvent) => void


function handleMainEvent(
    elem:HTMLIFrameElement,
    handler:MessageHandler
):void

function handleMainEvent(
    elem:HTMLFormElement,
    handler:FormSubmitHandler
):void

function handleMainEvent(
    elem:HTMLFormElement | HTMLIFrameElement,
    handler:FormSubmitHandler | MessageHandler
){
    const myFrame = document.getElementsByTagName("iframe")[0];
    const form = document.getElementsByTagName("form")[0]
    handleMainEvent(myFrame,(evnt) => {
        console.log(evnt)
    })
}
// this type 
function myClickHandler(this:HTMLButtonElement,event:Event){
    this.disabled = true
}
const myButton = document.getElementsByTagName("button");

// myClickHandler(new Event("click")); this call dont have any context which type is HMTLBUttonElement

const boundHandler = myClickHandler.bind(myButton);
boundHandler(new Event("click"));

myClickHandler.call(myButton,new Event("click"));

// explicit function return type

type JSONPrimitive = number | string | boolean | null 
type JSONObject = {[k:string]:JSONValue}
type JSONArray = Array<JSONValue>
type JSONValue = JSONArray | JSONObject | JSONPrimitive

export async function getData(url:string):Promise<{properties:Array<string>}> {
    const resp = await fetch(url)
        const data = (await resp.json()) as {
            properties:string[]
        }
    return data
}

function loadData(){
    getData("https://example.com").then((result) => {
        console.log(result.properties.join(""))
    })
}