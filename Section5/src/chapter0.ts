//인터페이스

interface Person {  //인터페이스의 이름에는 대문자 I를 붙이기도 한다. IPerson
    readonly name : string;
    age? : number;
    sayHi:()=>void;
}

// 인터페이스와 타입 선언과의 차이점
type Type1 = number | string;
type Type2 = number & string;


const person : Person = {
    name : "이정인",
    sayHi:function(){
        console.log("hi");
    }
};

person.sayHi();