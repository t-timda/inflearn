//타입 변수 응용하기

//1st 사례
function swap <T,U> (a: T, b:U){ 
    //인수의 타입을 서로 다른걸 이용하고 싶을때, 제네릭 두가지로 주면 된다.
    return ([b,a]);
}

const [a,b] = swap ("1",2); //첫 인자는 STRING, 두번째 인자는 NUMBER

//2nd 사례
//배열에 제네릭을 줄 수 있다
function returnFirstValue<T>(data: [T, ...unknown[]]){ //처음 타입은 추론하고 나머지는 관심 없음
    return data[0];
}

let num = returnFirstValue([1,2,3]);
//1
let string = returnFirstValue(["a",2,3]);
//"a"

//3rd 사례
function getLength<T extends { length : Number }>(data : T){
    return data.length;
}

let var1 = getLength([1,2,3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({length : 10}); // 10
let var4 = getLength(10); //