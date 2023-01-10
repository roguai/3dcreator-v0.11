import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../App/context";
import AssetContainer from "./AssetContainer";
import DeployContainer from "./DeployContainer";
import PreviewCharactor from "./PreviewCharactor";
import models from "./models";

const Container=styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const AssetCreator = ()=>{
    const {changeTheme}=useGlobalContext();
    useEffect(()=>{
        changeTheme('yellow');
    },[]);
    const [charactor, setCharactor]=useState(models.templates.charactors[0])
    const handleChangeCharactor=(c)=>{
        setCharactor(c);
    }
    return (
        <Container>
            <AssetContainer 
                changeCharactor={handleChangeCharactor}
            />

            <PreviewCharactor 
                charactor={charactor}
            />

            <DeployContainer />


        </Container>
    )
};

export default AssetCreator;