//타입 단언
type Person = {
    name: string;
    age: number;
}

let person = {} as Person; //타입 단언
person.name="이정인";
person.age=24;

type Dog = {
    name:string;
    color:string;
}

let dog = {
    name:"돌돌이",
    color:"brown",
    breed:"진도", //초과 프로퍼티 검사 진행
} as Dog;

{/*
타입 단언의 규칙
값 as 단언 <- 단언식
A as B
A가 B의 슈퍼타입이거나
A가 B의 서브타입이어야 함    
*/}

let num1 = 10 as never; //10은 number 타입, never 서브타입
let num2 = 10 as unknown; 
// let num3 = 10 as string; //number 타입과 string 타입은 슈퍼 혹은 서브 타입 구조가 아님 error
let num4 = 10 as unknown as string; //number-unknown(ok), unknown-string(ok) -> 좋진 않음


//const 단언

let num5 = 10 as const;

let cat = {
    name:"야옹이",
    color : "yellow"
} as const; //readonlyt -> 이후 수정 불가능

//non null 단언

type Post = {
    title:string;
    author?:string;
}

let post:Post={
    title:"게시글1",
    author:"이정인",
}

const len : number = post.author!.length; //null 혹은 non 이 아닐거라는걸 확신
