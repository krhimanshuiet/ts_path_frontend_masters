export class Magzine{
    issueNumber():number{
        return 42;
    }
}

declare module "../lib/registry"{
    export interface DataTypeRegistry{
        magazine:Magzine
    }
}