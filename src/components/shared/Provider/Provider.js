import { ThemeProvider, createGlobalStyle } from "styled-components";
import {theme, primaryFontStyles} from './theme';


const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    ul,
    ol {
        list-style: none;
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    html {
        font-size: 16px;
    }

    body {
        ${primaryFontStyles}
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    select::-ms-expand {
        display: none;
      }
`;

const Provider = ({children, themeColor})=>{
    return (
        <ThemeProvider
            theme={themeColor==='default'? theme.default : theme.yellow}
        >
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
};

export default Provider;

