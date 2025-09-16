//인터페이스와 클래스

interface CharacterInterface{
    name : string;
    moveSpeed : number;
    move():void;
}

class Character implements CharacterInterface{
    //생성자에서 필드 정의 및 생성

    constructor(public name: string, public moveSpeed:number){
    } //단 인터페이스는 무조건 public 이므로 private, protected 불가

    move():void{
        console.log(`${this.moveSpeed} 속도로 이동`);
    }
}