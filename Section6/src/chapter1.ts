//타입스크립트의 클래스

const employee = {
    name : "이정인",
    age : 24,
    position:"멋사프론트엔드",
    work(){
        console.log("인프런 수강하기");
    },
}

class Employee{
    //필드
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

class ExecutiveOfficer extends Employee{
    //필드
    officeNumber: number;

    //생성자
    constructor(name : string, age : number, position : string, officeNumber : number){
        super(name, age, position);
        this.officeNumber=officeNumber;
    }
}

const employeeB = new Employee("이정환",27,"개발자");
console.log(employeeB); 

const employeeC : Employee = {
    name : "",
    age : 20,
    position : "",
    work(){
        console.log("인프런 수강하기");
    }
}
