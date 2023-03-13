//import React from "react"
//react 라이브러리에서 기본으로 export한 대상은 React미여, 그안에는
//수많은 함수들이 들어있음(useState포함)
//사용할 때 React.useState() 사용가능


//useState함수만 import 하여 쓰고 싶으면
//useState는 기본으로 export되어있지 않기에 {}로 감싸서 import

import {useState} from "react";

const CounterNum=()=>{
    const [cnt,setCnt]=useState(0);
    //useState() 함수는 인자로 초기값 전달
    //함수사용 결과는 두칸 배열, 앞자리는 상태(state),뒷자리(state를 수정하는 함수)
    //cnt는 상태(rendering시 변하는 부분,state)변수가 되어버렸고, 
    //setCnt는 함수인데, 변화된 상태를 반영하여 re-rendering을 요청하는 함수
    const [star,setStar]=useState('⭐');

    // let num=0;

    function onCountUp(){
        
        console.log('+버튼눌림');
        setCnt(cnt+3);
        
    }
        // num++;
        // A=num;
    
    function onCountDown(){
        
        console.log('-버튼눌림');
        setCnt((a)=>a-1);
        // num++;
        // A=num;
    }

    function onButtonClick(){

        onCountUp();
        onCountDown();

    }


    return(
        <>
        <h1>{cnt}</h1>
        <h1>{star}</h1>
        <button onClick={onCountDown}>-</button>        
        <button onClick={onCountUp}>+</button>
        <button onClick={onButtonClick}>이상한 버튼</button>
        </>
    )


}


export default CounterNum;