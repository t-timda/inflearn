// map 메서드

import { it } from "node:test";

const arr = [1,2,3];
const newArr = arr.map((it) => it*2); //[2,4,6] & it number로 추론

function map<T, U>(arr: T[], callback: (itme:T)=>U){
    let result = [];
    for(let i=0; i< arr.length  ; i++){
        result.push(callback(arr[i]));
    }
    return result;
}

map(arr, (it) => it * 2); //arr 과 it 은 같은 타입이어야 한다.
map(["hi","hello"],(it)=>parseInt(it)); 
//배열 요소가 string 타입 이므로 반환값도 같은 타입으로 맞춰줘야함 -> 타입을 두개 이용하여 해결

//forEach

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach <T> (arr:T[], callback:(item : T) => void){
    for (let i = 0; i < arr.length ; i++){
        callback(arr[i]);
    }
}

forEach(arr2, (it) => {
    console.log(it.toFixed());
})

forEach(['123','456'],(it)=>{
    it;
})