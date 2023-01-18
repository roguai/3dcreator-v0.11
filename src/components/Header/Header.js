import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Crypto from "./Crypto";
import ProgressBar from "./ProgressBar";
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.png';
import { useGlobalContext } from "../App/context";
import walletIcon from '../../assets/images/favicon 2.png';
import nearIcon from '../../assets/images/nearlogo.png';


const Container = styled.div`
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    display: flex;
    z-index:1000;
`;
const LogoContainer = styled.div`
    flex:auto;
    display:flex;
 
`;
const AvatarContainer = styled.div`
    flex:auto;
    display:flex;
    justify-content:right;
`;

const Avatar = styled.img`
    width:40px;
    height:40px;
    margin-top:20px;
    margin-right:20px; 
    border-radius:50%;
    cursor:pointer;
`;


const Logo = styled.img`
    width:120px;
    height:26px;
    margin-top:27px;
    margin-left:16px;
    cursor:pointer;
`

const WalletConnectBtn = styled.button`
    width:156px;
    height:37px;
    color:white;
    border-radius:8px;
    font-size:14px;
    font-weight:600;
    line-height:19px;
    border:0;
    cursor:pointer;
    margin-top: 24px;
    margin-right: 44px;
    background:${({ theme }) => theme.colors.mainColor};
`;

const WalletConnectContainer = styled.div`
    box-sizing: border-box;

    position: absolute;
    width: 600px;
    height: 405px;
    left: 0px;
    top: 0px;

    background: rgba(0, 8, 20, 0.68);
    backdrop-filter: blur(7px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 15px;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position: fixed;
    top: calc(50vh - 240px);
    left: calc(50vw - 300px);
    & img{
        position:absolute;
        margin-top:-465px;
    }
}
`;

const Title = styled.p`
    margin-top:72px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    /* identical to box height, or 29px */

    text-align: center;

    color: #FFFFFF;
`;

const Text = styled.p`
    margin-top: 5px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    /* identical to box height, or 27px */

    text-align: center;

    color: rgba(255, 255, 255, 0.9);
`;

const Wallet = styled.div`
    width: 500px;
    height: 74px;
    margin-top:36px;
    text-align:left;
    background: #1E1A2F;
    border-radius: 10px;

    & img{
        position:relative;
        width: 50px;
        height: 50px;
        margin-left: 22px;
        margin-top: 14px;
    }
    & p{
        position: absolute;
        margin-left: 89px;
        font-size: 22px;
        margin-top: -45px;
        font-weight: bold;
    
    }
`;

const ConnectBtn = styled.button`
    width: 500px;
    height: 74px;
    margin-top:36px;
    /* Red */

    background: ${({ theme }) => theme.colors.mainColor};
    border-radius: 10px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 24px */
    /* dark */

    color: #05080A;
    cursor:pointer;
`;

const BottomText = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */
    
    text-align: center;

    color: rgba(255, 255, 255, 0.9);
    margin-top:19px;
`


const Header = () => {
    const navigate = useNavigate();
    const { state, changeProfile } = useGlobalContext();
    const [isopenWallet, setIsopenWallet] = useState(false);
    const ref = useRef();
    const ref1 = useRef();
    const handleOutsideofRef = (e) => {
        if (ref.current && !ref.current.contains(e.target) && ref1.current!==e.target) {
            setIsopenWallet(false);
        }

    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideofRef);
        return () => {
            document.removeEventListener('click', handleOutsideofRef);
        }
    }, [ref])
    return (
        <Container>
            <LogoContainer>
                <Logo
                    onClick={() => {
                        navigate('/profile');
                    }}
                    src={logo}
                />
                <ProgressBar value={40} />
            </LogoContainer>
            {
                state.profile.iswalletConnect &&
                <AvatarContainer>
                    {/* <Crypto crypto="bitcoin" amount="0.345 ETH" />
                    <Crypto crypto="litecoin" amount="8470 LTC" /> */}
                    <Crypto crypto="retio" amount="5000 REIGN" />
                    <Avatar
                        onClick={() => {
                            navigate('/profile');
                        }}
                        src={avatar}
                    />
                </AvatarContainer>
            }
            {
                !state.profile.iswalletConnect &&
                <AvatarContainer>
                    <WalletConnectBtn
                        ref={ref1}
                        onClick={() => {
                            setIsopenWallet(true);
                        }}
                    >Connect Wallet</WalletConnectBtn>
                </AvatarContainer>
            }
            {
                isopenWallet &&
                <WalletConnectContainer ref={ref}>
                    <img src={walletIcon} />
                    <Title>Connect wallet</Title>
                    <Text>Choose your wallet to sign in</Text>
                    <Wallet>
                        <img src={nearIcon} />
                        <p>NEAR Wallet</p>
                    </Wallet>
                    <ConnectBtn
                        onClick={() => {
                            changeProfile('Unnamed', true);
                            setIsopenWallet(false);
                        }}
                    >Connect</ConnectBtn>
                    <BottomText>Terms and Conditions</BottomText>
                </WalletConnectContainer>

            }

        </Container>
    )
}

export default Header;