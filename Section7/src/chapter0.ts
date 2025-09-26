//제네릭 소개

//제네릭 함수. 함수의 인수에 따라서 반환값의 타입을 가변적으로 설정해 줄 수 있다
// -> 모든 타입에 대해 범용적으로 사용할 수 있는 함수
//c++에서 Template랑 같은 기능
function func<T>(value : T): T{
    return value;
}

let num = func(10);
let str = func("하이");

//직접 타입을 정해줄수 있음
let arr = func<[number, number, number]>([1,2,3]);