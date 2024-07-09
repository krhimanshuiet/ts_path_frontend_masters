// Object and Property Types

//Objects

const myCar = {
  make: "Toyota",
  model: "Corrolla",
  year: 2022,
  chargeVoltage: 34,
};

let car: {
  make: string;
  model: string;
  year: string;
};

// A function that prints info about a car to stdout

function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number; // optional property
}) {
  let str = `${car.make} ${car.model} ${car.year}`;
  if (typeof car.chargeVoltage !== "undefined") {
    str += `${car.chargeVoltage}`;
  }
  str;
}

printCar(myCar);

// optional properties
//? Insert into function printCar
// car.chargeVoltage

// access property checking

const myArgs = {
  make: "Tesla",
  model: "Model 3",
  year: 2020,
  color: "RED",
};
myArgs.color;
printCar({ ...myArgs });

// Index Signatures
// dictionary of phone

const phones: {
  mobile: {
    country: string;
    area: string;
    number: string;
  };
  [k: string | "mobile"]: {
    country: string;
    area: string;
    number: string;
  };
} = {
  home: { country: "+1", area: "211", number: "652-4515" },
  work: { country: "+1", area: "211", number: "652-4515" },
  fax: { country: "+1", area: "211", number: "652-4515" },
  mobile: { country: "+1", area: "211", number: "652-4515" },
};

console.log(phones["fax"]);
console.log(phones.custom_1);
console.log(phones.mobile);
// model as an index signature

const x: { [k: string]: string } = {};
// x.foo = "foo"
// const phones : {
//     [k:string]:{
//         country:string,
//         area:string,
//         number:string
//     }
// } = {}

phones.mobile; // known property
phones["work"]; // unknown property

// array types
const fileExtensions1 = ["js", "ts"];
const fileExtensions2: Array<string> = ["js", "ts"];
const fileExtensions3: string[] = ["js", "ts"];

const cars = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
  },
];
// tuples

let myCar2 = [2002, "Toyota", "Corrola"];
const [year, make, model] = myCar2; // destructuring

year;
make;
model;

// inference does not work very well for tuples

let myCar3: [number, string, string] = [2002, "Toyota", "Corrola"];

const [year1, make1, model1] = myCar3;
make1;
year1;
model1;

// myCar3 = ["toyota",2002,"corrola"]  // wrong convention
// myCar3 = [2002,"toyota","corrola","delhi",true] // too many elements

// readonly tuples

const numPair: [number, number] = [20, 23]; // valid

// const numTriplet:[number,number,number] = [6]  invalid

[101, 102, 103].length;

numPair.push(89);
numPair.push(78);
numPair;

const numPair2: readonly [number, number] = [23, 54];

numPair2;

// numPair2.push(89);  can not push

const twod: string[][] = [["delhi"], ["mumbai"]];

// nominal vs structural

// nominal -> java classes

// structural
class Car {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;
}

class Truck {
  make: string;
  model: string;
  year: number;
  towingCapacity: number;
}

const vehicle = {
  make: "Honda",
  model: "Accord",
  year: 2017,
};

function printCar2(car: { make: string; model: string; year: number }) {
  console.log(car);
}

printCar2(new Car());
printCar2(vehicle);
printCar2(new Truck());
