import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import SideBar from "../components/sideBar";

const HomePage = () => {
    // menuOpen 변수에 true ==> 메뉴열림
    // menuOpen 변수에 false ==? 메뉴닫힘, 초기값은 닫혀있는 상태
    const [menuOpen,setMenuOpen] = useState(false)


    return( 
      <>
        <Header 
        subtitle="메인페이지"
        detail="리액트 문제를 풀어보며 실력을 향상하자"
        menuOpen ={menuOpen}
        setMenuOpen = {setMenuOpen}
        //header안에있는 메뉴를 클릭했을때 메뉴오픈이 트루
        //state는 부모컴포넌트에서 쓰고있다
        //header는 자식이여서 값을 전달해 줘야함 =>props로 전달

        />
        <SideBar menuOpen ={menuOpen} setMenuOpen={setMenuOpen}></SideBar>
        <ul>
        <li><Link to='/'>홈페이지로 이동하기</Link></li>
        <li><Link to='/counter'>counter로 이동하기</Link></li>
        <li><Link to='/operator'>삼항연사자 및 논리연산자로 이동하기</Link></li>
        <li><Link to='/material'>material ui 적용해보기</Link></li>
        </ul>
      </>
    );
}

export default HomePage