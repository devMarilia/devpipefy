import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');  
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-size: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        font: 14px 'Roboto', sans-serife;
        background: #ecf1f8;
        color: #333;
        -webkit-font-smoothing: antialiasem !important;
    }
    ul: {
        list-style: none;
    }
`; 