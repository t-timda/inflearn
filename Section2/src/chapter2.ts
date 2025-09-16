//배열
let numArr:number[]=[1,2,3];

let strArr:string[]=['hello','im','timda'];

let boolArr:Array<boolean>=[true,false,true];

//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr:(number|string)[]= [1,"hello"];

//다차원 배열의 타입을 정의하는 방법
let doubleArr:number[][]=[[1,2],[3,4]];

//튜플
//길이와 타입이 고정된 배열
let tup1:[number,number]=[10,20];
let tup2:[number, string, boolean]=[1,'hello',true];

tup1.push(30); //튜플에 요소 추가 가능
tup1.pop(); //튜플에서 요소 제거 가능

const users:[string, number][]=[
    ["kim", 30],
    ["park", 25],
    ["lee", 40],
]