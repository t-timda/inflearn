//제네릭 클래스

class NumberList{
    constructor(private list : number[]){}

    push(data : number){
        this.list.push(data);
    }
    
    pop(){
        this.list.pop();
    }

    print(){
        console.log(this.list);
    }
}

class List<T> { //
    constructor(private list : T[]){}

    push(data : T){
        this.list.push(data);
    }
    
    pop(){
        this.list.pop();
    }

    print(){
        console.log(this.list);
    }
}

const numberList = new List([1,2,3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1","2","3"]);
stringList.pop();
stringList.push("5");
stringList.print();