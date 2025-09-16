// 접근 제어자
/*
access modifier
=> public private proteced
*/

class Employee{
    //필드
    //private name : string ; => 외부에서 접근이 불가능, 메서드 안에서만 접근이 가능 
    name : string;
    age : number;
    position : string;

    //생성자
    constructor(name : string, age : number, position : string){ 
        this.name=name;
        this.age=age;
        this.position=position;
    }

    //메서드
    work(){
        console.log("인프런 수강하기");
    }
}

class Student{
    constructor(
        private name: string,
        protected age : number,
    ){}  //생성자에서 접근제어자를 달때 필드를 자동 생성, 즉 필드 삭제 가능
}

class ExecutiveOfficer extends Employee{
    //필드
    officeNumber: number;

    //생성자
    constructor(name : string, age : number, position : string, officeNumber : number){
        super(name, age, position);
        this.officeNumber=officeNumber;
    }
    func(){
        this.name;  //name이 private로 설정되어있으면 에러 발생 (파생 클래스 접근 하려면 protected)
    }
}


const employee = new Employee("이정인",24,"대학생");
//객체이기며 접근 제어자가 기본적으로 public 으로 설정, 즉 바로 접근 가능
employee.name = "홍길동";
employee.age = 30;
employee.position = "의적";