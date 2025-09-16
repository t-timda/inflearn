//함수 오버로딩
{/*
하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
하나의 함수 func
모든 매개변수 타입은 number
-> 매개변수 한개 일때, 그 값의 20배를 곱한 값 반환
-> 매개변수 세개 일때, 그 값들을 모두 합한 값 반환    
*/}
// 버전들 먼저 -> 오버로드 시그니처 
function func(a:number) : void;
function func(a:number, b:number, c:number) : void;

//실제 구현부 -> 구현 시그니처
function func(a:number, b?:number, c?:number) {
    if(typeof b === 'number' && typeof c === 'number'){
        console.log(a+b+c);
    }
    else{
        console.log(a*20);
    }
}  

func(1);
func(1,2,3);