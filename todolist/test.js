// console.log('안녕');
//구조화된 데이터
//1.객체

import { LocalConvenienceStoreOutlined } from "@mui/icons-material";

const myBook = {
    title: '박시은의 대머함',
    pages : 205,
    price : 1000
};

console.log(myBook.title);

// const title = myBook.title;
// const price = myBook.price;
// const pages = myBook.pages;
// 객체속에 들어있는 여러개의 값은
// 객체 속 key값과 동일한 이름의 변수에다가 한번에 대입할 수 있다
//그리고 변수는 중괄호로 묶어 줘야 한다


const {title,pages,price}=myBook;
console.log(title);
console.log(pages);
console.log(price);

show(myBook);



function show({title,pages,price}){
    console.log(`책제목은 ${title}입니다`)
    console.log(`페이지수는 ${pages}입니다`)
    console.log(`가격은 ${price}입니다`)
}


//배열의 비구조화하여 변수에 한 번에 대입하기
//배열은 변수들을 []로 묶어서 한 번에 대입할 수 있으며
//순서가 제한된다


const names = ['홍길동','김철수','박영희'];
const [a,b,c] = names;
console.log(a);
console.log(b);
console.log(c);



const personInfo = ['홍길동',10,30.8];
let [v1,v2,v3] = after10(personInfo);

console.log(v1);
console.log(v2);
console.log(v3);

function after10([a,b,c]){ // = [a,b,c]=personInfo
    let res=[a,b+10,c+20]
    return res;
}

console.log('===========day04논리연산맥락평가==================')
console.log('안녕' && 7);
console.log(0 && '반가워');

console.log('===========day05 map() 함수를 통해서 반복되는 커뫂넌트 한번에 넣어주기=========')

let ar =[1,3,5,7];
console.log(ar);


let res = ar.map((v)=>{
    return v+10
});
console.log(res);

res=ar.map((v)=>{return `<li>${v}반쪠 항목입니다</li>`})
console.log(res);

ar=[
    {name : '박시은',age:25},
    {name : '모모',age:2}
]

res=ar.map((v)=>`<li class = ${v.name}>${v.age} </li>`);
    console.log(res);


    //day07 얕은복사와 깊은복사
    //자주 사용되는 number,,str,boolean 깊은 복사
    //배열,사용자가 만듲ㄴ 객체들은 얕은 복사가 된다
    //얕은 복사 : 동일한 객체 자체가 새롭게 만들어지는 것이 아니라
    //같은 객체의 위치(주소)만 저장이 된다
    console.log("===========day07=============")
    ar1=[10,20,30];
    ar2 =ar1;
    ar2.push(50);
    console.log(ar1);

    //깊은복사 : 동일한 모양의 객체를 만들어서 대입하는 방식
        ar1 = [10,20,30];

        ar2=ar1.map(value=>value)

        ar2.push(50);
        console.log(ar1);

//깊은 복사를 도와주는 연산자
//연산자 사용 결과는 해당 배열 속에 들어있는 값 들
//spread operator : ...


ar1 = [10,20,30];
//...ar1-->10 20 30 
console.log(...ar1);
ar2=[...ar1]; // => ar2 = [10,20,30]

//concat()함수
//기존에 있던 배열에 다른 배열을 붙여서 새로운 배열을 반환한다
ar1=[10,20,30];
ar2 = ar1.concat(50);

console.log(ar1);
console.log(ar2);

//s1과 s2는 같은 객체를 참조하고 있다
//배열이 아닌 일반적인 객체
s1 = {id:1,name:'김철수',grade:'A'};
s2 = s1;


s2.name = '박영희';
console.log(s1);

s1 = {id:1,name:'김철수',grade:'A'};
console.log({...s1});
s2 = {...s1, age :15, id:20};


s2={...s1};
s2.name='박영희';
console.log(s1);
console.log(s2);

tmp = {id:1,age:20,id:50};
console.log(tmp);

//배열을 깊은  복사하여 삭제
 // filter 함수
 ar = ['배상엽','김철수','홍길동'];
 // ar2인데, ['김철수','홍길동']

 for(let a of ar1){

    if (a !=='배상엽'){
        ar2.push(a);
    }
 }

 console.log(ar1);
 console.log(ar2);

 //배열속 특정 요소에 부합하는 결과가 들어있는 새로운 배열을 반환하는 함수
 //filter()
 ar1 =['배상엽','홍길동','김철수'];

 ar1.filter((value)=>{return value !== '배상엽'});
 //return이 true가 되는 경우만 넘겨준다

 console.log(ar1);
 console.log(ar2);

 