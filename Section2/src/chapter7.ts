//void
//void -> 공허 -> 아무것도 리턴하지 않는다는 뜻

function fun1():string{
    return "hello";
}

function fun2():void{ //void 타입은 함수에서 주로 사용
    console.log("hi");
    //return undefined; //명시적으로 undefined를 반환할 수 있지만, 보통은 아무것도 반환하지 않음
}

function fun3():undefined{
    return undefined; //undefined 타입은 함수에서 명시적으로 undefined를 반환할 때 사용
}

let a:void;
a=1; //에러 발생

//never
//never -> 절대 발생하지 않는다는 뜻

function fun4(): never{
    while(true){ //무한 루프
    }
}