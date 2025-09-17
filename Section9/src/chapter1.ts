//분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

 let a : StringNumberSwitch<number>;
 // a:string

 let b : StringNumberSwitch<string>;
 // b:number

 //분산적인 조건부 타입으로 구분됨
 let c : StringNumberSwitch<number | string>;
//StringNumberSwitch<number> | StringNumberSwitch<string>
//  -> string | number

let d : StringNumberSwitch <boolean | number |string>;
// StringNumberSwitch<number> | StringNumberSwitch<string> | StringNumberSwitch<string>
// number | string | number
// => number | string

// 실용적인 예제

type Exclude <T, U> = T extends U ? never : T ; 

type A = Exclude <number|string|boolean, string>;
//Exclude<number,string> | Exclude<string, string> | Exclude<boolean, string>
//number | never | boolean
// => number | boolean

// => 결국 여러가지 타입중에 원하는 타입을 제외하는 로직을 만듦

type Extract<T, U> =  T extends U ? T : never ;

type B = Extract <number | string | boolean, string>;