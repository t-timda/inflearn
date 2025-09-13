//선언 합침

type Person1 = {
    name : string;
}

//타입은 중복 선언 불가
{/*
    type Person1 = {
    }
    //에러 발생
*/}

//인터페이스는 중복 선언 가능
interface Person2{
    name:string;
}

interface Person2{
    name:string;
    //name : "이정인"; => 타입이 달라서 오류 발생, 반드시 같은 타입
    age: number;
}

interface Developer extends Person2 {
    name : "hello";
}

const person : Person2 ={
    name : "이정인",
    age : 24,
}

//모듈 보강

interface Lib {
    a: number;
    b: number;
}

//이후 같은 이름으로 인터페이스를 추가해서 모듈 보강 가능
interface Lib{
    c: string;
}

const lib :Lib = {
    a:1,
    b:2,
    c: "HELLO",
}