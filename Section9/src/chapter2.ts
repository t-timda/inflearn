//infer - 조건부 타입 내에서 타입 추론하기

type Func = () => string; 

type ReturType<T>  = T extends () => string ? string : never ;

type A = ReturType<Func>; 
// type A = string , Func 이 string을 받고 있기에 string === string

type FuncB = () => string;

type FuncC = () => number;

type B = ReturType<FuncB>;
// type B = string

type C =ReturType<FuncC>;
// type C = never

type ReturType2<T>  = T extends () => infer R ? R : never ;
//R 이라는 타입은 조건식을 참으로 만들도록 추론. 즉 T와 같은 타입이 되고, 결국 R(==T) 가 반환된다.

type D = ReturType2<number>; // numver의 슈퍼타입을 추론할 수 없어서 거짓이 된다.

//예제
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
//1. T는 프로미스 타입일 것
//2. 프로미스 타입의 결과값 타입을 반환할것

type PromiseA = PromiseUnpack<Promise<string>>;
// type PromiseA = string