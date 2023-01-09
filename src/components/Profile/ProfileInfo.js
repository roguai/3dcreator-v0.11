import React from "react";
import styled from "styled-components";
import gearicon from '../../assets/images/gear.png';
import etherLogo from '../../assets/images/Ethereum_Logo.png';
import MyAssets from "./MyAssets";
import Avatar from "./Avatar";
import { useGlobalContext } from "../App/context";

const Conatiner = styled.div`
  
`;

const Nav=styled.div`
    display:flex;
    justify-content:center;
    margin-top:20px;
`;

const UserName = styled.p`
    margin-top: 15px;
    font-size: 34px;
    font-weight: 600;
    line-height: 34px;
`;

const WalletInfo = styled.div`
    width: 220px;
    height: 48px;
    background: #1E1A2F;
    border-radius: 100px;
    padding: 15px 20px 15px 48px;
    line-height: 18px;
    font-size: 18px;
    font-weight: 500;
    &:before{
        content: '';
        position: absolute;
        background: url(${etherLogo}) no-repeat center;
        width: 32px;
        height: 32px;
        margin-left: -42px;
        margin-top: -7px
    }
`;


const SetBtn = styled.div`
    width: 48px;
    height: 48px;
    background: #1E1A2F;
    border-radius: 50%;
    padding: 14px;
    margin-left:12px;
    cursor:pointer;
`;

const WelcomMsg=styled.p`
    font-size:16px;
    line-height:22.4px;
    font-weight:500;
    width:500px;
    margin:28px auto 0 auto;

    & #username{
        color:#6AFFE5;
    }
`;

const ProfileInfo = ({setIsSetting}) => {
    const {state}=useGlobalContext();
    const username=state.profile.username;
    return (
        <Conatiner>
            <Avatar 
                setIsSetting={setIsSetting}
            />
            <UserName>{username}</UserName>
            <Nav>
                <WalletInfo>
                    {/* <EtherLogo src={etherLogo} /> */}
                    0x314413...fee810
                </WalletInfo>
                <SetBtn
                    onClick={()=>{
                        setIsSetting(true);
                    }}
                >
                    <img src={gearicon} />
                </SetBtn>
            </Nav>
            <WelcomMsg
                style={{
                    display: username==='Unnamed'?'none':'auto'
                }}
            >
                Welcome to the second collection of World of Avatars! Created and Illustrated by <span id="username">{username}</span>
            </WelcomMsg>
            <MyAssets />
        </Conatiner>
    )
};

export default ProfileInfo;