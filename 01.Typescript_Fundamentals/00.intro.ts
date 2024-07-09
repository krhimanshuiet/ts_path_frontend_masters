// what is typescript 

/*
typescript is open source typed syntactic superset of javascript
three parts 
1.language 
2.langiage server
3.compiler
*/

function add1(a,b){
    return a+b;
}

function add2(a,b,c=0){
    return a+b+c;
}

function add3(a:number,b:number):number{
    return a+b;
}

/**
 * create a promise that reolves after some time
 * @param n number of milliseconds before promise resolves
*/

function timeout(n:number){
    return new Promise((resolve) => setTimeout(resolve,n))
}

/** 
 * Add three numbers
 * @param a first number
 * @param b second
**/

export async function addNumber(a:number,b:number){
    await timeout(500);
    return a+b;
}

// es 2016 features


class Foo{
    static #bar = 3;
    static getValue(){
        return Foo.#bar;
    }
}

(async () => {
    console.log(await addNumber(Foo.getValue(),4));
})();