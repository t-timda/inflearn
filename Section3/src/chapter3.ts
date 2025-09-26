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

animal = dog; //Dog타입은 Animal타입에 할당 가능
// dog = animal; //Animal타입은 Dog타입에 할당 불가능

type Book={
    title:string
    price:number
}

type Magazine={
    title:string
    price:number
    month:string
}

let book:Book={
    title:'책',
    price:20000
}

let magazine:Magazine={
    title:'잡지',
    price:5000,
    month:'10월'
}

//초과 프로퍼티 검사
book = magazine; //Magazine타입은 Book타입에 할당 가능
// magazine = book; //Book타입은 Magazine타입에 할당 불가능

let book2:Book={
    title:'책',
    price:20000,
    //month:'10월' //초과 프로퍼티 검사로 인해 에러 발생
}

