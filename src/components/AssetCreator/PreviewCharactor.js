import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import circle from '../../assets/images/Ellipse 5.png';
import circlebtn from '../../assets/images/Move.png';
import { Suspense, useState } from "react";
import { templates } from "./glbModels";
import { useGlobalContext } from "../App/context";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content:end;
    position:relative;
`;

const CharatorPan = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    position:absolute;
    margin-bottom:70px;
    z-index:1000;
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
        margin:-15px auto 0 auto;
        cursor:pointer;
        & #left{
            width: 50px;
            height: 50px;
            position: absolute;
            margin-top: -48px;
            margin-left: -35px;
            &:hover{
                background: #00000047;
            }
        }
        & #right{
            width: 50px;
            height: 50px;
            position: absolute;
            margin-top: -48px;
            margin-left: 17px;
            &:hover{
                background: #00000047;
            }
        }
    }
    & #charactor{
        width:100%;
    }
    & #subcon{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
   
`;

/**
 * 
 * @param {*} param0 
 * @returns 
 * frameloop="demand" we can use in canvas to scale performance
 */
const PreviewCharactor = () => {
    const [y, setY] = useState(0);
    const {state}=useGlobalContext();
    const Preview=state.currentModel.Preview;
    return (
        <Container>

            <CharatorPan>
                <div id="subcon">
                    <div id="shadow" />
                    <img id="circle" src={circle} />
                    <div id="move">
                        <img id="" src={circlebtn} />
                        <div 
                            id="left"
                            onClick={()=>{
                                setY(y-0.2);
                            }}
                        ></div>
                        <div 
                            id="right"
                            onClick={()=>{
                                setY(y+0.2);
                            }}
                        ></div>
                    </div>
                    
                </div>

            </CharatorPan>
            <Canvas
                camera={{ position: [2, 0, 12.25], fov: 15 }}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <ambientLight intensity={1.25} />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={0.4} />
                <Suspense fallback={null}>
                    {<Preview rotation={[0, y, 0]} />}
                </Suspense>
                <OrbitControls enablePan={false} enableZoom={false}/>
            </Canvas>
        </Container>
    )
};

useGLTF.preload(templates.map(({ url }) => url))
export default PreviewCharactor;