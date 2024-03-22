import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --background-color: hsl(0, 2%, 12%);
        --background--color-transparent: hsla(0, 2%, 12%, 0.7);
        --font-color-bright: hsl(47, 100%, 47%);
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0 0 20px 0;
        padding: 200px 0 0 0;
        background: var(--background-color);
        font-family: 'Roboto', sans-serif;
        text-align: center;
        color: white;
    }
`;
