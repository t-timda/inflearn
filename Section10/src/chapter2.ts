//Pick<T,K>
// -> 뽑다, 고르다
// -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입

interface Post{
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?:string;
}

type Pick<T, K extends keyof T> = {
    // K는 T 타입의 key값들 중 하나여야 함
    // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
    [key in K] : T[key];
}

const legacyPost : Pick<Post, "title" | "content"> = { // Post로부터 title과 content만 받아오기로 함
    title : "옛날 글",
    content : "a long time ago"
}

//Omit<T,K>
// -> 생략하다, 빼다
// -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

// Pick과 Exclude 유틸리티 타입을 조합하여 만듦
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = "title"
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL' , 'title'>>
// 결과 -> Pick<Post, 'content' | 'tags' | 'thumbnailURL' >

const noTitlePost : Omit <Post, "title"> = { // "title" 프로퍼티만 제외됨
    content: "",
    tags: [],
    thumbnailURL: "https://",
}

//Record<K,V>
// -> K를 key로, V를 value의 타입으로 갖는 객체를 생성

type thumbnailLegacy = {
    large: {
        url: string;
    };
    medium: {
        url: string;
    };
    small: {
        url: string;
    };
}

// K는 string | number | symbol, V는 모든 타입이 될 수 있음
type Record<K extends keyof any, V> = {
    [key in K]: V;
}

// "large", "medium", "small" 키가 각각 {url: string} 타입을 값으로 가짐
type Thumbnail = Record<"large" | "medium" | "small", { url :string }>;
// thumbnailLegacy와 완전히 똑같음.