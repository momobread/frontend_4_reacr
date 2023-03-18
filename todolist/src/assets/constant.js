//경로랑 텍스트 관리

import Counter from "../pages/counter";
import HomePage from "../pages/homePage";
import MaterialTestPage from "../pages/material";
import OpPage from "../pages/operatorPage";
import MapPage from "../pages/MapPage"
import GuestBookPage from "../1_guestbook/1_guestBook";
import MarketPage from "../2_market/1_marketPage";
import ParentPage from "../3_lifecycle/1_page";


export const paths = [
    {path : '/',title:'홈페이지로 이동하기',component :<HomePage />},
    {path : '/counter',title:'카운터페이지로 이동하기',component : <Counter/>},
    {path : '/operator',title:'논리,삼항 연산자 이동하기',component : <OpPage />},
    {path : '/material',title:'material ui 사용해보기',component : <MaterialTestPage/>},
    {path : '/map', title : 'map()을 이용해 반복되는 컴포넌트 추가하기',component : <MapPage/>},
    {path : '/online-guest-book',title:'온라인 방명록',component:<GuestBookPage/>},
    {path : '/market',title:'마켓페이지',component:<MarketPage/>},
    {path : '/lifecycle',title:'생명주기',component:<ParentPage/>},
];

