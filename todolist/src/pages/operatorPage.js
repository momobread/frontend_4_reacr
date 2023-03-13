// 삼항 연산자 및 논리연산자가 사용되는 경우

import Header from "../components/header"
import styled from "styled-components"
import { useState } from "react"

const OpPage=()=>{
    const subtitle= "삼항연산자 및 논리연산자"
    const detail = "리엑트나 자바스크립트에서는 삼항연산자 및 논리연산자를 쓰는 경우가 많습니다"
   

    const[isClicked,setIsClicked]=useState(0)

    function onDivClick(){
        setIsClicked(1);

    }

   
    return (
        <>
            <Header subtitle={subtitle} detail={detail}/>
            <MyDiv id='div1' a = '안녕' isCar='true'>div1입니다</MyDiv>
            <MyDiv id ='div2'>div2입니다</MyDiv>
            <MyDiv onClick={onDivClick} a={isClicked}>div3</MyDiv>
        </>
    );
}

const MyDiv=styled.div`
    border : 3px solid black; 
    display: inline-block;
    width : 300px;
    height : 100px;
    text-align: center;
    margin : 0 20px;
    background-color: ${(props)=>props.a ? 'red' : ''};
                    //혹은 ${({a})=>a ? 'red ': 'blue'}
    &:hover{    
        //자바스크립트 id div1과 a 안녕 객체를 받아온다
        //&는 자기자신이라는 요소디
        background-color: #e9e9e9;
    }

    &::after{
        content : ${({isCar})=> isCar && "'🚗'"};
        //중괄호안에 iscar을 쓰는 이유 비구조화 하려고
    }
`

// const Test = styled.Header`
//     text-align: center;
// `

// const MyH2=styled.h2`
//     color : red;
// `

export default OpPage;
