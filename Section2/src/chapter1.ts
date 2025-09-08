//chapter1.ts

//number 타입
let num1: number = 10; //타입 annotation
let num2 : number = -2 //음수 가능
let num3 : number = 3.14 //소수점 가능
let num4 : number = Infinity //무한대 가능
let num5 : number = NaN //Not a Number 가능

//string 타입
let str1 : string = 'hello' //홑따옴표 가능
let str2 : string = "hello" //겹따옴표 가능
let str3 : string = `hello` //백틱(템플릿 리터럴) 가능
let str4 : string = `hello ${num1}` //백틱(템플릿 리터럴) 가능

//boolean 타입
let bool1 : boolean = true //true 가능
let bool2 : boolean = false //false 가능

//null 타입
let n1 : null = null //null 가능

//undefined 타입
let u1 : undefined = undefined //undefined 가능

//리터럴 타입
let numA : 10 = 10 //10만 가능
let strA : 'hello' = 'hello' //'hello'만 가능
let boolA : true = true //true만 가능
