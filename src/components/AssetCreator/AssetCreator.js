import { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../App/context";
import AssetContainer from "./AssetContainer";
import DeployContainer from "./DeployContainer";
import PreviewCharactor from "./PreviewCharactor";

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
    return (
        <Container>
            <AssetContainer />

            <PreviewCharactor />

            <DeployContainer />


        </Container>
    )
};

export default AssetCreator;