// 타입 별칭

type User={ // 타입별칭을 통해 타입을 정의할 수 있다. 주의점 : 타입 별칭은 중복 선언이 불가능하다.
    id:number;
    name:string;
    nickname:string;
    birthday:string;
    bio:string;
    location:string;
}

let user1:User={
    id:1,
    name:'timda',
    nickname:'happy',
    birthday:'1990-01-01',
    bio:"hello world",
    location:'seoul',
}

let user2:User={
    id:2,
    name:'james',
    nickname:'smart',
    birthday:'1995-05-05',
    bio:"hi there",
    location:'busan',
}

//인덱스 시그니처\
type CountryCodes={
    [key:string]:string; //대괄호 안의 key는 string 타입, 값은 string 타입이라는 의미
}

let countryCodes={
    korea:'kr',
    usa:'us',
    japan:'jp',
}

type CountryNubmers={
    [key:string]:number;
    Korea:number; //values 는 number 타입이어야 한다.
}

let countryNubmers:CountryNubmers={
    Korea:410,
};