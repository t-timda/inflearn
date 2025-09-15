//enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용히는 타입

enum Role{
    ADMIN=0,
    USER=1,
    GUEST=2
}

enum Language{
    KOREAN='ko',
    ENGLISH='en',
    JAPANESE='jp'
}
const User1={
    name:"kim",
    role:0, //0 <- ADMIN
    Language:Language.KOREAN // 'ko'
}

const User2={
    name:"park",
    role:Role.USER, //1 <- USER
    Language:Language.ENGLISH //'en'
}   

const User3={
    name:"lee",
    role:2, //2 <- GUEST
    Language:Language.JAPANESE //'jp'
}

console.log(User1, User2, User3);   