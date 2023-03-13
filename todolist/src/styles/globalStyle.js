import {createGlobalStyle} from 'styled-components'

const GlobalStyle= createGlobalStyle`

    body{
        margin : 0;
        padding : 0;
        box-sizing : border-box;
        font-family: 'Ubuntu', sans-serif;
        background-color: #F5F5F7;
        color : #1d1d1f;
    }


ul,ol{
    list-style : none;

}

    a{
        text-decoration:none;
    }

a:link, a:visited{}
    color:black;
`;

export default GlobalStyle;