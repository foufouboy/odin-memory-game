import { createGlobalStyle } from "styled-components";
import Background from "../../assets/food-bg.png";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth
    }

    :root {
        --orange-red: rgb(213, 66, 21);
        --orange-red-hover: rgb(213, 66, 21, .8);
        --orange-red-active: rgb(193, 56, 19);
        --black: rgb(0, 0, 0);
        --white: rgb(255, 255, 255);
        --main-font: "Source Sans 3";
    }

    body {
        font-family: var(--main-font);
        background: url(${Background});
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1, h2, h3 {
        font-family: "Lilita One";
    }
`

export default GlobalStyles;
