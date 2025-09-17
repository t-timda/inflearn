// keyof 연산자

interface Person {
    name:string;
    age:number;
}

function getPropertyKey (person : Person, key : keyof Person){
    //keyof Person == string | number
    console.log (person[key]);
}

function getPropertyKey2 (person : Person, key : keyof typeof person){
    //typeof Person == Person name:string; age:number;}
    console.log (person[key]);
}

const person : Person = {
    name : "이정인",
    age : 24
}

getPropertyKey(person, "name"); //이정인 출력