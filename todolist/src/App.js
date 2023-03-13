import { paths } from './assets/constant'; 
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import GlobalStyle from './styles/globalStyle';


function App() {
  const routes=paths.map((value)=><Route path ={value.path} element={value.component} key={value.path}/>);
  
  return(
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        {routes}
      </Routes>
    </BrowserRouter>
  
    </>
  )
}




export default App;




// const Myh1 =styled.h1`
//   font-size : 20px;
//   color : blue;
//   text-align:center;
// `
//styled-components 사용하기
//styled.컴포넌트이름`
// css문법
//
//`
//태그도 컴포넌트입니다
//App : 사용자가 만든 새로운 컴포넌트

//App이라는 컴포넌트를 만들겠다
//컴포넌트를 만드는 방법
//1. 클래스를 활용하는 방법
//class 컴포넌트명 extends Components{
//  render(return 컴포넌트)
//  render(){
//    return(컴포넌트)
//   }
//}
//별로 안쓰여서 음 ... 옛날방식

// return(<h2>안녕</h2>
  //  <P>바보야</P> --> 안됌       )
    //<div</div>대신에 비어있는<></> 태그로 묶을수도 있다

//React 16부터 함수 형태로 컴포넌트를 만들 수 있게 되었다
//함수 모양으로 컴포넌트를 만드는 방법