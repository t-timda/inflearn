//인덱스드 엑세스 타입

//객체 타입
interface Post {
    title : string;
    contents : string;
    author:{
        id: number;
        name: string;
    }
}

function printAuthorInfo(author : Post["author"]){ 
    //function printAuthorInfo(author : Post["author"]["name"]){
    // -> 중첩을 이용해서 더 내부의 속성을 가져올 수 도 있다.
    //매개변수의 타입을 인덱스드 엑세스 타입으로 설정하여, 
    //인터페이스 내부의 정보가 바뀌어도 바로 반영될 수 있다.
    // # Post["author"] 에서 author는 인덱스라고 부른다. 값이 아니라 타입으로 분류가 된다.
    console.log(`${author.name} - ${author.id}`);
}

const post : Post = {
    title : "타입스크립트",
    contents : "게시글 본문",
    author : {
        id : 1,
        name : '이정환'
    }
}

//배열 타입
type PostList = {
    title : string;
    contents : string;
    author:{
        id: number;
        name: string;
    }
}[]

function printAuthorInfo2(author : PostList[number]["author"]){
    console.log(`${author.name} - ${author.id}`);
}

const post2 : PostList[number] = { 
//PostList는 배열이기 때문에 [number]를 통해서 많은 배열의 원소중 하나를 가져온다고 이해하기 
    title : "타입스크립트",
    contents : "게시글 본문",
    author : {
        id : 1,
        name : '이정환'
    }
}

//튜플 타입

type Tup = [string, number, boolean];

type tup0 = Tup[0];
type tup1 = Tup[1];
type tup2 = Tup[2];