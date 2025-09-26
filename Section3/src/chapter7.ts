// 타입 좁히기
// 조건문 등을 이용해서 넓은 타입에서 좁은 타입으로 
// 타입을 상황에 따라 좁히는 방법

type Person={
    name:"string";
    age:"number";
}

//value => number : toFixed
//value => string : toUpperCase
//value => Date : getTime
//value => Person : name 은 age살 입니다
function func(value: number|string|Date|null|Person){
    value; //union 타입으로 추론
    if(typeof value === "number"){ //타입 가드 역할(number 타입만 받아들이는 가드)
        console.log(value.toFixed); //number로 추론
    }
    else if(typeof value==="string"){
        console.log(value.toUpperCase); //string으로 추론
    }
    else if(value instanceof Date){ //instance 왼쪽이 오른쪽 객체인지 물어보는 명령어
        console.log(value.getTime()); //Date로 추론
    }
    else if(value && "age" in value){
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}
