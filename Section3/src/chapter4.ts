//대수 타입
//여러개의 타입을 합성하여 새롭게 만들어낸 타입
//합집합 타입과 교집합 타입이 있다.

//1. 합집합 타입(Union Types)
let a : number | string; //number타입 또는 string타입
a = 10;
a = 'hello';
// a = true; //boolean타입은 할당 불가능

let arr: (number | string)[]; //number타입 또는 string타입의 배열
arr = [1,2,3,'hello','world'];

type Dog={
    name:string
    color:string
}

type Person={
    name:string
    language:string
}

type union1 = Dog | Person; //Dog타입 또는 Person타입

let unionVar:union1={
    name:'dog',
    color:'white'
} //Dog타입

let unionVar2:union1={
    name:'person',
    language:'korean'
} //Person타입

let unionVar3:union1={
    name:'cat',
    color:'black',
    language:'english'
} //Dog타입과 Person타입의 모든 프로퍼티를 가질 수 있음 (교집합 개념)

{/*
    let unionVar4:union1={
    name:'animal'
} //Dog타입과 Person타입의 공통 프로퍼티만 가질 수 없음 (집합에 포함이 안됨)
 */}

 // 2. 교집합 타입(Intersection Types)
 let variable : number & string; //number타입과 string타입을 모두 만족하는 타입 -> 불가능한 타입 (never타입)

 type Car={
    name:string
    color:string
 }

 type Toy={
    name:string
    price:number
 }

 type intersection1 = Car & Toy; //Car타입과 Toy타입을 모두 만족하는 타입

 let intersectionVar:intersection1={
    name:'car toy',
    color:'red',
    price:10000
 } //Car타입과 Toy타입의 모든 프로퍼티를 가질 수 있음