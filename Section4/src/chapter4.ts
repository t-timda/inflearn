//사용자 정의 타입 가드

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function warning(animal: Animal) {
  if ("isBark" in animal) { // in을 쓰면 프로퍼티 이름이 바뀌면 작동 안함.. 단점
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else if ("isScratch" in animal) {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}

//이 단점을 해결하는 문법이 타입 가드
// Dog 타입인지 확인하는 타입 가드
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

// Cat 타입인지 확인하는 타입가드
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning2(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}