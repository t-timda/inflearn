//unknow 타입

function unknownExam(){
    let a:unknown = 1;
    let b:unknown = "hello";
    let c:unknown = true;
    let d:unknown = null;
    let e:unknown = undefined; // 업케스팅

    let unknownVar:unknown;
    //  let num: number = unknownVar; //에러 발생, 다운케스팅
}

//never 타입 -> 공집합
function neverExam(){
    function neverFunc():never{
        while(true){} //무한루프
    }

    let num: number = neverFunc(); //업케스팅
}

//void 타입 -> 아무것도 없는 상태
function voidExam(){
    function voidFunc():void{
        console.log("hello");
        // return; //명시적으로 아무것도 반환하지 않음을 나타낼 수 있음
    }

    let voidVar: void = undefined; //업케스팅
}

//any 타입 -> 모든 타입
function anyExam(){
    let unknownVar:unknown;
    let anyVar:any;
    let neverVar:never;

    anyVar = unknownVar; //다운케스팅이지만 에러 발생하지 않음

    neverVar = anyVar; //Never 타입은 어떤 타입도 다운케스팅 불가
}
