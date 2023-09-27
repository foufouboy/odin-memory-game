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
        --black: rgb(0, 0, 0);
        --white: rgb(255, 255, 255);
        --main-font: "Source Sans 3";
    }

    body {
        font-family: var(--main-font);
        background: url(${Background});
    }
`

export default GlobalStyles;
