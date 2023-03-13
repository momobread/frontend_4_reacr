import styled from "styled-components";
import logo from "../assets/logo192.png"
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Header =({subtitle,detail,menuOpen,setMenuOpen}) => {

    // console.log(subtitle);
    // console.log(detail);

    const menuClick = () => {
        setMenuOpen(true);
        
    }

    return (<>
    <HeaderNav>
        <div>
            <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
        <img src={logo} alt="로고"/ >
        <h1>박시은</h1>
        </div>
        <MenuIcon onClick={menuClick}>
    
        </MenuIcon>
    </HeaderNav>
    <HeaderWrap>
        <h1>도전 리액트 뿌시기!</h1>
            <h2>{subtitle}</h2>
            <p>{detail}</p>
            <Line></Line>
    </HeaderWrap>
    </>

    );
}

export default Header;

const HeaderWrap = styled.div`
   
    text-align : center;
    margin-bottom : 30px;

`;

const HeaderNav = styled.nav`
    z-index:3;
    position:relative;
    padding : 0 5%;
    display : flex;
    height : 60px;
    background-color:#fff;
    box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
    align-items:center ;
    justify-content : space-between;

    & > div {
        display :flex;
        align-items: center;
    }

    & > div > h1{
     color:#61dafb;   
    }
    & > div > img{
        width:50px;
    }
    
`;

    const Line = styled.div`
        display:inline-block;
        border-bottom : 3px solid #626274;
        width : 150px;
    `