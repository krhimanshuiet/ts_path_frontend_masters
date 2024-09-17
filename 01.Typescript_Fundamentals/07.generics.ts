// Generics 

const phones:{
    [k:string]:{
        customerId:string
        areaCode:string
        num:string
    }
} = {}

phones.home
phones.work
phones.fax
phones.mobile

const phoneList = [
    {customerId:"0001",areaCode:"321",num:"123-456"},
    {customerId:"0002",areaCode:"322",num:"223-456"},
    {customerId:"0003",areaCode:"323",num:"323-456"},
    {customerId:"0004",areaCode:"324",num:"423-456"},
    {customerId:"0005",areaCode:"325",num:"523-456"},
]

const phoneDict = {
    '0001':{
        customerId:"0001"
    },
    "0002":{

    },
    "0003":{

    }
}

interface PhoneInfo{
    customerId:string;
    areaCode:string;
    num:string
}

function listToDict<T>(list:T[],idGen:(arg:T) => string):{[k:string]:T}{
    const dict:{[k:string]:T} = {};
    list.forEach((element) => {
        const dictKey = idGen(element);
        dict[dictKey] = element;
    })
    return dict
}


const result = listToDict(phoneList,(item) => item[item.customerId]);


function wrapInArray<T>(args:T):[T]{
    return [args]
}

wrapInArray<number>(3)
wrapInArray<string>("himanshu")
wrapInArray({a:1})
wrapInArray<Array<string>>(["apple"])

// Best Practices 

listToDict([
    new Date("10-01-2001"),
    new Date("10-01-2001"),
    new Date("10-01-2001"),
    new Date("10-01-2001"),
    new Date("10-01-2001"),
    new Date("10-01-2001"),
],
(arg) => arg.toISOString()
)

function returnAs<T>(args:T):T{
    return args;
}

const foo = returnAs<number>(41);

function makeTuple<T,U>(args1:T,args2:U):[T,U]{
    return [args1,args2];
}

const z = makeTuple<string,number>("himanshu",90);
const zz = makeTuple<Array<string>,Array<number>>(["apple"],[23]);