//자바스크립트의 클래스 소개

class Student{  //클래스 이름 시작은 대문자
    //필드
    name;
    grade;
    age;

    //생성자
    constructor(name,grade,age){
        this.name=name;
        this.grade=grade;
        this.age=age;
    }

    //메서드
    study(){
        console.log("열심히 공부 함");
    }
    introduce(){
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
}

class StudentDeveloper extends Student { //클래스 상속
    //필드
    favoriteSkill;

    //생성자
    constructor(name,grade,age,favoriteSkill){
        super(name,grade,age); //슈퍼클래스로 인자 전달
        this.favoriteSkill=favoriteSkill; 
    }

    //메서드
    programming(){
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}

let sutdentA={
    name:"이정인",
    grade:"A+",
    age:24,
    study(){
        console.log("열심히 공부 함");
    },
    introduce(){
        console.log("안녕하세요!");
    },
}

//클래스를 이용해서 만든 객체 -> 인스턴스
let sutdentB = new Student ("이정환","B+",27);

sutdentB.introduce();

let sutdentC = new StudentDeveloper("개발자","A+",30,"C++");
sutdentC.favoriteSkill();