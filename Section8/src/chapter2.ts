//맵드 타입

interface User {
    id:number;
    name:string;
    age:number;
}

type partailUser = { // * 인터페이스에서는 사용할 수 없음
    [key in "id"|"name"|"age"]? : User[key];
    // [key in keyof User]? : User[key]; -> 완전히 같음
    // key 값은 id, name, age 를 가질수 있고 ? 를 이용해서 없어도 됨
    //User[key]는 key 값에 따라 number, string, number 를 갖게 된다.
    /*
    type partailUser = {
    id?: number | undefined;
    name?: string | undefined;
    age?: number | undefined;
    }
    */
}

type booleanUser = {
    [key in "id"|"name"|"age"]? : boolean;
    /*
    type booleanUser = {
    id?: boolean | undefined;
    name?: boolean | undefined;
    age?: boolean | undefined;
    }
    */
}

function fetchUser() : User {
    // ...다른 기능
    return {
        id:1,
        name:"이정인",
        age:24,
    }
}

function updateUser(user:User){
    //...수정하는 기능
}