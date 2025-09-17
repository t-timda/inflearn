//맵드 타입

interface User {
    id:number;
    name:string;
    age:number;
}

function fetchUser() : User {
    // ...다른 기능
    return {
        id:1,
        name:"이정인",
        age:24,
    }
}