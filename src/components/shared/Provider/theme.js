import { css } from "styled-components";
export const theme={
    default:{
        colors:{
            bgMain:'#0c1217',
            progressbar1:'#6AFFE5',
            progress1:'rgba(106, 255, 229, 0.2)',
            sidebarbg:'rgba(0, 8, 20, 0.68)',
            mainColor:'#6AFFE5',
            hoverColor:'rgba(224, 46, 46, 0.08)'
        }
    },
    yellow:{
        colors:{
            bgMain:'#1E1E1E',
            progressbar1:'#E02E2E',
            progress1:'rgba(224, 46, 46, 0.2)',
            sidebarbg:'rgba(0, 8, 20, 0.68)',
            mainColor:'#E02E2E',
            hoverColor:'rgba(224, 46, 46, 0.08)'
        }
    }
    
};

export const primaryFontStyles= css`
    font-family:'Manrope';
    font-size:14px;
    font-style:normal;
    color:white;
`