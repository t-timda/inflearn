//조건부 타입

type A = number extends string ? string : number ;
//number 타입은 string을 확장한 타입이 아니기에 거짓을 의미하는 number 타입을 갖는다

type ObjA = {
    a : number;
}

type ObjB = {
    a : number;
    b : string;
}

type B = ObjB extends ObjA ? number : string;
//ObjB는 ObjA를 확장하고 있기 때문에 참의 number 타입이 된다.

//제네릭과 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;
//T가 number라면 string으로 타입 변환, 그렇지 않다면 number로 타입변환이 되는 함수

let varA : StringNumberSwitch<number> // string

function removeSpaces(text : string){
    return text.replaceAll(" ","");
    //repalceAll은 첫 인자를 찾아서 두번째 인자로 변환하는 기능 수행
}

function removeSpaces2<T> (text :T): T extends string ? string : undefined ;
function removeSpaces2(text : any){
    if(typeof text === "string"){
        return text.replaceAll(" ", "");
    }else{
        return undefined;
    }
}
//함수 선언부에서 타입을 판단하게 만들고, 함수 정의부에서는 any 타입을 써서 작성

let result = removeSpaces2("이정인 입니다. !!");
result.toUpperCase(); //let result: string

let result2 = removeSpaces2(undefined); //let result2: undefined