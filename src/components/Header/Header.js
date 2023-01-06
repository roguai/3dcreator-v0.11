import React from "react";
import styled from "styled-components";
import Crypto from "./Crypto";
import ProgressBar from "./ProgressBar";
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.png';

export const Container = styled.div`
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    display: flex;
`;
export const LogoContainer = styled.div`
    flex:auto;
    display:flex;
 
`;
export const AvatarContainer = styled.div`
    flex:auto;
    display:flex;
    justify-content:right;
`;

export const Avatar = styled.img`
    width:40px;
    height:40px;
    margin-top:20px;
    margin-right:20px; 
    border-radius:50%;
`;


export const Logo = styled.img`
    width:120px;
    height:26px;
    margin-top:27px;
    margin-left:16px;
`



const Header = () => {
    return (
        <Container>
            <LogoContainer>
                <Logo src={logo} />
                <ProgressBar value={40}/>       
            </LogoContainer>
            <AvatarContainer>
                <Crypto crypto="bitcoin" amount="0.345 ETH" />
                <Crypto crypto="litecoin" amount="8470 LTC" />
                <Avatar src={avatar} />
            </AvatarContainer>
        </Container>
    )
}

export default Header;