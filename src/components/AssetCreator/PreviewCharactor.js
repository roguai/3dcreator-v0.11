import styled from "styled-components";
import cha1 from '../../assets/images/fullbody-final imagePNG 2.png';
import shadow from '../../assets/images/Ellipse 4.png';
import circle from '../../assets/images/Ellipse 5.png';
import circlebtn from '../../assets/images/Move.png';

const Container=styled.div`
    width: 100%;
    height: 100%;
    padding: 40px;
    display:flex;
    flex-direction:column;
    justify-content:end;
`;

const CharatorPan=styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    & #shadow{
        background: radial-gradient(126.79% 126.79% at 50% -14.29%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%);
        filter: blur(6px);
        width: 80%;
        height: 56px;
        border-radius: 50%;
        margin: auto;
        margin-top: -37px;
    }
    & #circle{
        margin-top:-79px;
        width:100%;

    }
    & #move{
        margin-top:-18px;
        cursor:pointer;
    }
    & #charactor{
        width:100%;
    }
    @media(min-width:1500px){
        & #shadow{
           
            width: 400px;
            
        }
        & #circle{
            margin-top:-79px;
            width:auto
    
        }
        & #move{
            margin-top:-18px;
        }
        & #charactor{
            width:auto;
        }
    }
`;

const PreviewCharactor=()=>{
    return (
        <Container>

            <CharatorPan>
                <img id="charactor" src={cha1} />
                <div id="shadow" />
                <img id="circle" src={circle} />
                <img id="move" src={circlebtn} />
            </CharatorPan>
        </Container>
    )
};

export default PreviewCharactor;