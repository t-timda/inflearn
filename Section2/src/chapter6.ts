//any
//특정 변수의 타입을 우리가 확실히 모를때

let anyVar :any = 10; //any 타입은 어떤 타입이든 할당 가능
anyVar = "hello";
anyVar = true;
anyVar = [1,2,3];
anyVar = {};
anyVar = () => {};

//unknown
//any 타입과 비슷하지만 더 엄격한 타입

let unknownVar:unknown = 10;
unknownVar = "hello";
unknownVar = true;
unknownVar = [1,2,3];

if(typeof unknownVar === 'number'){
    let numVar:number = unknownVar; //타입 가드 : unknown 타입을 특정 타입으로 좁히는 방법
    console.log(numVar + 10); //이제 numVar는 number 타입이므로 숫자 연산 가능
}

//unknown 타입은 any 타입과 달리 다른 타입에 할당할 수 없다.
//let numVar:number = unknownVar; //에러 발생