//인터페이스의 확장

interface Animal {
    name : string;
    age : number;
}

interface Dog extends Animal{ //C++에서 상속이랑 비슷한 개념
    isBarck : boolean;
}

interface Cat extends Animal{
    isScratch : boolean;
}

interface Chicken extends Animal{
    name : "꼬꼬댁"; //인터페이스를 상속 받아올때 재정의 가능
    isFly : boolean;
}

//두개를 같이 상속 받을 수 있음
interface DogCat extends Dog, Cat{}

const dogcat : DogCat = {
    name:"개냥이",
    age:10,
    isBarck:true,
    isScratch:false,
}