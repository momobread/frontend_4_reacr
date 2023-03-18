import {useReducer, useState} from 'react';



const myReducer = (state,a) =>{
    // console.log('myreducer실행됨 ',state);
    // console.log(a);
    // myReducer 함수가 return하는 값이 state변화로 적용된다
    if(a.type === 'increase'){
        return state+1
    }if(a.type === 'mul'){
        return state *2;
    }if(a.type === 'div'){
        return state % 3;
    }
    
    throw new Error('예상치못한 에러')
}





const ReducerPage = () => {
   
    
    // const onButton1 = () =>{
    //     setCnt(cnt + 1);
    // }
    
    // const onButton2 = () =>{
    //     setCnt(cnt * 2);
    // }
    
    // const onButton3 = () =>{
    //     setCnt(cnt % 3);


    //리듀서함수 : 실직적으로 상태 관리 역할을 해주는 함수(setState)
    //useReducer(리듀서함수,state의 초기값); --> 사용결과는 두칸짜리 배열,
    //0번째자리에는 state변수가,1번째 자리에는 dispatch함수가 들어있다

    const [cnt,dispatch]=useReducer(myReducer,0)
    //넘겨준 함수에는 상태가 누군지.액션 이렇게 두개의 인자가필요
    //cnt가 상태변화할때 쓰는 관리되는변수가 되고고
    //dispatch를 쓰는 이유는 없다.걍 함수이름 쓰면 됌


    return(
        <>
            <h1>{cnt}</h1>
            <button onClick={()=>dispatch({type:'increase'})}>버튼1</button>
            <button onClick={()=>dispatch({type:'mul'})}>버튼2</button>
            <button onClick={()=>dispatch({type:'div'})}>버튼3</button>
        </>
    )

    }
export default ReducerPage





















