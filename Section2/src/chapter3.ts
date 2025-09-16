//object
let user:{id:number; name:string} = { //객체의 속성 타입 지정
    id:1,
    name:'timda',
};

let dog:{name:string; color:string;}={
    name:'happy',
    color:'brown',
}

let user2:{
    id?:number; //?는 있어도 되고 없어도 되는 속성
    name?:string;
}

user2={
    id:2,
    name:'james',
}

let config:{
    readonly apiKey:string; //읽기 전용 속성
}={
    apiKey:'ABCD1234',
};

user.id;