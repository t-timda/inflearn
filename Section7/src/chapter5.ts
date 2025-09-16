// 프로미스

import { rejects } from "assert";

const promise = new Promise <number> ((resolve, reject)=>{
    setTimeout(()=>{
        //resolve(20);
        reject("실패");
    },3000);
})

//기본적으로 결과값을 추론하지 못함 => <> 안에 리턴값의 타입을 설정해줘야함
promise.then((response)=>{
    console.log(response * 20);
})

//reject의 경우 타입을 설정해 줄 수 없어서 typeof를 이용하여 직접 설정해줘야함
promise.catch((err)=>{
    if(typeof err === "string"){
        console.log(err);
    }
})


//프로미스를 반환하는 함수의 타입을 정의

interface Post{
    id: number;
    title : string;
    content : string;
}

function  fetchPost(): Promise<Post>{
    return new Promise ((resolve,rejects)=> {
        setTimeout(()=>{
            resolve({
                id:1,
                title:"멋사2학기",
                content:"게시글 컨텐츠",
            })
        },3000);
    });
}

const postRequest = fetchPost();

postRequest.then((post)=>{
    post.id;
})