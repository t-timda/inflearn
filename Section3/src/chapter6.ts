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
