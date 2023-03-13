import styled from "styled-components"; 
import VirtualizedList from "./list";
import CloseIcon from '@mui/icons-material/Close';

const SideBar = ({menuOpen,setMenuOpen}) =>{
   


    return (
        <SideBarWrap menuOpen ={menuOpen}>
            <Myclose onClick={()=>setMenuOpen(false)}/>
            <VirtualizedList></VirtualizedList>
        </SideBarWrap>
    );
}


export default SideBar;

const Myclose = styled(CloseIcon)`
    padding : 10px;
    &:hover {
        cursor : pointer;
    }
`


const SideBarWrap = styled.div`

    width : 300px;
    height: 100%;
    background-color: #fff;
    position: fixed;
    right : 0;
    top : 0;
    z-index: 5;  
    transform:translateX(300px) ${({menuOpen})=>
        menuOpen && 'translateX(-300px)'};
    transition:1s;
`;