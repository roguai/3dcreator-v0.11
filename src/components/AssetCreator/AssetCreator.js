import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../App/context";
import AssetContainer from "./AssetContainer";
import DeployContainer from "./DeployContainer";
import PreviewCharactor from "./PreviewCharactor";
import models from "./models";
import { useLocation } from "react-router-dom";

import Human1 from '../../assets/models/customize/Human1';
import Human2 from '../../assets/models/customize/Human2';

const Container=styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const AssetCreator = (props)=>{
    const {state}=useLocation();
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