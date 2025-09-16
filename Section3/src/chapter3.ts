//기본 타입간의 호환성
let num1:number = 10;
let num2:10=10; //리터럴 타입
num1 = num2; //리터럴 타입은 기본 타입에 할당 가능
// num2 = num1; //기본 타입은 리터럴 타입에 할당 불가능

//객체 타입간의 호환성
type Animal={
    name:string
    colr:string
}

type Dog={
    name:string
    colr:string
    breed:string
}

let dog:Dog={
    name:'dog',
    colr:'white',
    breed:'yorkshire'
}

let animal:Animal={
    name:'cat',
    colr:'black'
}