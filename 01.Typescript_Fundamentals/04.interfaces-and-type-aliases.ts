// interfaces and type aliases

// type aliaces 

type Amount = {
    currency:string,
    value:number
}

type MightBeNull = string | null

function printAmount(amt:Amount){
    console.log(amt);
    const {currency,value} = amt;
    console.log(`${currency} and ${value}`)
}

const donation = {
    currency:"USD",
    value:30.0,
    description:"Donation to food bank"
}

printAmount(donation)


// lets look at a familiar example from the last chapter

function flipCoin1(){
    if(Math.random() > 0.5) return "heads";
    return "tails"
}

const success = ["Success",{name:"Himanshu Singh",email:"hks@gmail.com"}] as const;
const fail = ["error",new Error("Something went wrong")] as const;

function mayBeGetUserInfo(){
    if(flipCoin1() === "heads") return success;
    return fail
}

// let us model the return type as a type alias

type UserInfoOutcomeError = readonly ["error",Error];
type UserInfoOutcomeSuccess = readonly ["success",{readonly name:string,readonly email:string}]

type UserInfoOutcome = UserInfoOutcomeError | UserInfoOutcomeSuccess;


// Inheritance in type aliases 

type SpecialDate = Date & {getDescription():string};

const newYearEve:SpecialDate = Object.assign(new Date(),{getDescription:()=>"Last Day of the year"})

newYearEve

console.log(newYearEve.getDescription())

// Interfaces

interface NewAmount{
    currency:string | null
    value:number
}

function printAmount2(amt:NewAmount){
    amt
    const {currency,value} = amt;
}

// Inheritance in Interfaces 
// extends keyword

function consumeFood(arg){
    console.log(arg)
}

class AnimalThatEats{
    eat(food){
        consumeFood(food)
    }
}

class Cat extends AnimalThatEats{
    meow(){
        return "meow"
    }
}

const cat = new Cat();

cat.eat("rice");
cat.meow()


interface Animal{
    isAlive():boolean
}

interface Mammal extends Animal{
    getFurOrHairColor():string
}

interface Hamster extends Mammal{
    squeak():string
}

function careForHamster(h:Hamster){
    h.getFurOrHairColor();
    h.isAlive();
    h.squeak();
}

// Implements keyword

interface AnimalLike{
    eat(food:string):void;
}

class Dog implements AnimalLike{
    eat(food:string){
        consumeFood(food)
    }
    bark(){
        return "Woof"
    }
    isAlive(): boolean {
        return true
    }
}

// put all together

class LivingOrganism{ // base class
    isAlive(){
        return true;
    }
}

interface CanBark{ // another interface
    bark():string
}

interface Doglike extends Animal,AnimalLike,CanBark{}

class Dog2 
extends LivingOrganism
// implements Animal,AnimalLike,CanBark OR
implements Doglike
{
    isAlive(){
        return true
    }
    bark(){
        return "bark"
    }
    eat(food: string): void {
        console.log(food)
    }
} 

// class Foo extends Dog extends class Dog2{

// }

// implements sometimes works type aliases


type CanJump = {
    jumpToHeight():number | [number,number]
}

// type CanBark2 = number | {bark():string}  not ideal , only for object types
type CanBark2 = {bark():string}


class Dog3 implements CanJump,CanBark2{
    jumpToHeight(): number | [number,number] {
        return [17,9]
    }
    eat(food:string){
        consumeFood(food)
    }
    bark():string{
        return "bhoo"
    }
}


// open interfaces 

function feed(animal:AnimalLike){
    if(animal.isAlive()) animal.eat("food")
    
}

interface AnimalLike { // Additional declarations is OK
    isAlive():boolean
}

// interfaces are open but not type aliases

// use case : argumenting existing types 

// tells TS that exampleProperty exists

// declare global {
//     interface Window{
//         exampleProperty:number
//     }
// }

// window.document  // an existing property 

// window.exampleProperty = 42 

// Recursive Types

type NestedNumbers = number | NestedNumbers[];

const val:NestedNumbers = [3,4,[5,6,[7],59],221];

if(typeof val !== "number"){
    val.push(90);
    val.push([89,23])
}


// JSON Type Exercise