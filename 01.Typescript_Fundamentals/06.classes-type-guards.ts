// classes
class Car{
    static #nextSerialNumber:number;
    static #generateSerialNumber(){
        return this.#nextSerialNumber++;
    }
    static isReady:boolean;
    static { // static block
        fetch("https://api.example.com/vin_number_data").then(resp => resp.json()).then((data) => {
            this.#nextSerialNumber = data.mostRecentInvoiceId +1;
            this.isReady = true
        })
    }
    readonly #serialNumber=Car.#generateSerialNumber();
    protected getSerialNumber(){
        return this.#serialNumber;
    }  
    constructor(public make:string,public model:string,public year:number){} 
    hooonk(duration:number):string{
        return `h${'o'.repeat(duration)}nk`
    }
    getLabel(){
        return `${this.make} ${this.model} ${this.year} - #${this.getSerialNumber()}`
    }  
    equals(other:unknown){
        if(other && typeof other === "object" && #serialNumber in other){
            other
            return other.#serialNumber === this.#serialNumber
        }
        else{
            return false
        }
    }
}
const sedan = new Car("Honda","Accord",2017);
// methods
const sedan1 = new Car("Honda","Accord",2017);
sedan1.hooonk(2);
// static member fields
// static block
// Access Modifiers
// access modifiers on static fileds
// JS Private #fieds
// Private Field presence check
// Params Properties

class Base{

}
class Car2 extends Base{
    foo = console.log("class fields intializer");
    constructor(public make:string){
        super();
        console.log("custom constructor stuff")
    }
}
// overrides
class Truck extends Car{
    override hooonk(duration: number): string {
        console.log("BEEP")
        return "HEEP"
    }
}
// type guards and narrowing

let value: Date | null | undefined | "pineapple" | [number] | {dateRange:[Date,Date]} | 0 | false

//1 instanceof

if(value instanceof Date){
    value
}

//2 typeof 

if(typeof value === "string"){
    value
}

//3. specific value check

if(value === null){
    value
}

//4.truty and falsy check

if(!value){
    value
}

//5. some built in function 

if(Array.isArray(value)){
    value
}
//6.property presence check

if("dateRange" in value){
    value
}

// user defined type guards

interface CarLike{
    make:string,
    year:number
}

let mybecar:any;

// the guard



function isCarLike(valueToTest:any):valueToTest is CarLike{
    return(mybecar && typeof mybecar === "object" && "make" in mybecar && typeof mybecar["make"] === "string" && "year" in mybecar && typeof mybecar["year"] === "number")
}

if(isCarLike(mybecar)){
    mybecar
}

//assert value is foo

function assertIsCarLike(valueToTest:any): asserts valueToTest is CarLike{
    if(!(mybecar && typeof mybecar === "object" && "make" in mybecar && typeof mybecar["make"] === "string" && "year" in mybecar && typeof mybecar["year"] === "number")){
        throw new Error(`Value does not appears to be a CarLike ${valueToTest}`)
    }
}

assertIsCarLike(mybecar)
mybecar

class Car3{
    static #nextSerialNumber:number = 100;
    static #generateSerialNumber(){
        return this.#nextSerialNumber++;
    }
    #serialNumber = Car3.#generateSerialNumber();
    static isCar(other:any):other is Car3{
        if(other && typeof other === "object" && #serialNumber in other){
            other
            return true
        }
        return false
    }

}

let val:any;
if(Car3.isCar(val)){
    val
}

// Narrowing with switch

class Fish{
    swim():void{

    }
}

class Bird{
    fly():void{

    }
}

switch(true){
    case val instanceof Bird:
        val.fly();
        break;
    case val instanceof Fish:
        val.swim();
        break;
}

// writing high-quality type guards

function isNull(val:any):val is null{
    return val === null
}

const empty = "";
const zero = 0;
const n = null;

if(isNull(empty)){
    empty
}

if(isNull(zero)){
    zero
}
if(isNull(n)){
    n
}


