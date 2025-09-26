//Exclude <T, U>
//-> 제외하다
//-> T에서 U를 제거하는 타입

type Exclude <T,U> = T extends U ? never :T;
/*
1단계
Exclude <string, boolean> |
Exclude <boolean, boolean>

2단계
string |
never

최종
string
*/

type A= Exclude <string | boolean, boolean>;
// A는 string 타입

//Extract <T, U>
// - > T에서 U를 추출하는 타입

type Extract <T,U> = T extends U? T: never;

type B = Extract <string | boolean, boolean>;
// B 는 boolean 타입

//ReturnType<T>
//-> 함수의 반환값 타입을 추출하는 타입
type ReturnType <T extends (...arg: any) => any > =T extends ( ...arg:any)=>infer R? R:never;