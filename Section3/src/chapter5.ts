//타입 추론

let a = 1;
let b = "hello";
let c = {
    id:1,
    name:"이정인",
    profile:{
        nickname:"timda",
    },
}

let { id, name, profile } =c;

function func (){
    return "hello";
}

//any 타입의 진화
let d; //d가 암묵적 any타입으로 선언
d=10;
d.toFixed(); //d가 number로 추론됐음

d="hello";
d.toUpperCase(); //d가 string으로 추론됐음

const num = 10; //num이 number 리터럴로 추론됨
