import { css } from "styled-components";
export const theme={
    default:{
        colors:{
            bgMain:'#0c1217',
            progressbar1:'#ddff00',
            progress1:'rgba(221, 255, 0, 0.2)',
            sidebarbg:'rgba(0, 8, 20, 0.68)',
            mainColor:'#ddff00',
            hoverColor:'rgba(224, 46, 46, 0.08)'
        }
    },
    yellow:{
        colors:{
            bgMain:'linear-gradient(180deg, #000000 0%, rgba(91, 134, 229, 0.8) 100%)',
            progressbar1:'#ddff00',
            progress1:'rgba(221, 255, 0, 0.2)',
            sidebarbg:'rgba(0, 8, 20, 0.68)',
            mainColor:'#ddff00',
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