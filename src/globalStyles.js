import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    } 

    body {
        margin: 0;
        padding: 0;
        font-family: 'Lato';
    }

    /* .contenedor {
        width: 97%;
        max-width: 1200px;
        margin: 0 auto;
    } */

    img {
        max-width: 100%;
        display: block;
    }
`;

