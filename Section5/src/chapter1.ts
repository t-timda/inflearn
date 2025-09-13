//인터페이스의 확장

interface Animal {
    name : string;
    age : number;
}

interface Dog extends Animal{ //C++d에서 상속이랑 비슷한 개념인듯..
    isBarck : boolean;
}

interface Cat extends Animal{
    isScratch : boolean;
}

interface Chicken extends Animal{
    isFly : boolean;
}