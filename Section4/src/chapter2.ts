//함수 타입의 호환성 
//특정 함수 타입을 다른 타입의 함수로 취급해도 괜찮은가를 판단
//1. 반환값의 타입이 호환되는가
//2. 매개변수의 타입이 호환되는가

//기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a:A = () => 10;
let b:B = () => 10;

a=b;
// b=a // error 리터럴 타입에 number타입으로 다운케스팅 제한

//기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = ( value : number ) => void;
type D = ( value : 10 ) => void;

let c:C = (value)=>{};
let d:D = (value)=>{};

// c=d; // error 매개변수의 경우 업케스팅이 제한되고, 다운케스팅이 허용된다.
d=c; //

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

//animalFunc = dogFunc; //더 많이 요구하는 함수는 위험하다 → 할당 불가
dogFunc = animalFunc; //더 적게 요구하는 함수는 안전하다 → 할당 가능

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a:number, b:number)=>void;
type Func2 = (a:number)=>void;

let func1:Func1=(a,b)=>{};
let func2:Func2=(a)=>{};

func1=func2; //매개 변수를 2개 받을수 있는데 1개만 넣으려는건 받아줄순 있다고 이해
// func2=func1; //매개 변수를 1개만 받아들이는데 2개를 넣으려니깐 에러