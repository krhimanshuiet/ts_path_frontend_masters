//intersections and unions

// union types

const humidity = 79;

// a set of numbers from 1 to 5
type OneThroughFive = 1 | 2 | 3 | 4 | 5;

let lowNumber: OneThroughFive = 2;

// lowNumber = 34  34 not in set

// a set of even numbers from 1 to 9;

type Evens = 2 | 4 | 6 | 8;

let evenNumber: Evens = 4;

// evenNumber = 20 // this even number not in set

// a set of numbers from 1 to 5 OR a set of even numbers from 1 to 9;

// let evenOrLowNumber = 5 as Evens | OneThroughFive;
let evenOrLowNumber: Evens | OneThroughFive = 5;

// evenOrLowNumber = 9 not valid

const isEven = (number: number): boolean => number % 2 === 0;

console.log(isEven(12));

// control flow sometimes results in union types

type flipCoinType = "heads" | "tails";

function flipCoin(): flipCoinType {
  if (Math.random() > 0.5) return "heads";
  return "tails";
}

console.log(flipCoin());
console.log(flipCoin());
console.log(flipCoin());
console.log(flipCoin());
console.log(flipCoin());
console.log(flipCoin());
console.log(flipCoin());

// a more complicated example

const success = [
  "success",
  { name: "Mike North", email: "mike@example.com" },
] as const
const fail = ["error", new Error("Something went wrong")] as const;

function maybeGetUserInfo() {
  if (flipCoin() === "heads") {
    return success;
  } else {
    return fail;
  }
}
// console.log(maybeGetUserInfo())
// console.log(maybeGetUserInfo())
// console.log(maybeGetUserInfo())
// console.log(maybeGetUserInfo())
// console.log(maybeGetUserInfo())
// console.log(maybeGetUserInfo())

const outCome = maybeGetUserInfo();

console.log(outCome[1].name);

// working with union types
//Think critically : AND vs OR as it pertains to the contents of the set,
// ? vs the assumptions we can make about the value

function printEven(even: Evens): void {}
function printLowNumber(lowNum: OneThroughFive): void {}
function printEvenNumberUnder5(num: 2 | 4): void {}
function printNumber(num: number): void {}

let y = 5 as Evens | OneThroughFive;
// printLowNumber(y) // not guranteed to be in {1,2,3,4,5}
// printEvenNumberUnder5(y) // not guranteed to be in {2,4}
printNumber(y);
// narrowing with type guards

const [first, second] = outCome;

if (second instanceof Error) {
  //   second;
} else {
  second;
}

// discriminated unions

if (first === "error") {
    // second;
} else {
  console.log(second?.name);
}

// intersections types
// what does evens and onethroughfive accepts as values
type evenAndLowNumber = OneThroughFive & Evens; //{1,2,3,4,5}&{2,4,6,8} -> {2,4}

// evenAndLowNumber = 6; not in OneThroughFive
// evenAndLowNumber = 3; not in Evens
// evenAndLowNumber = 4; In both

// what requirenments can Evens & OneThroughFive meet?

let z = 4 as Evens & OneThroughFive;

function printLowNumber2(lowNum: OneThroughFive): void {
  lowNum;
}

printLowNumber(z); // guranteed to be {1,2,3,4,5}
printEvenNumberUnder5(z); // guranteed to be in {2,4}
printNumber(z); // guranteed to be a number
