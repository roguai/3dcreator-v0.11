import React from "react";
import styled from "styled-components";

import bitcoin from '../../assets/images/Bitcoin-3.png';
import litecoin from '../../assets/images/LiteCoin-3.png';
import plusicon from '../../assets/images/plus.png';
import {ReactComponent as RetioWalletIcon} from '../../assets/images/reitio-wallet-logo 2.svg';
import retioIcon from '../../assets/images/reitio-wallet-logo 2.png';

const Container = styled.div`
    display: flex;
    height: 20px;
    color: white;
    margin-top: 30px;
    margin-right:36px;
`;

const Coin = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 4px;
`;

const Plus = styled.img`
    width:9px;
    height:9px;
`;

const PlusBtn=styled.div`
    width:20px;
    height:20px;
    border-radius:5px;
    background: #1F1B30;
    margin-left:6px;
    text-align:center;
`;

const Crypto = ({ crypto, amount }) => {
    const cryptImg = crypto === 'bitcoin' ? bitcoin : crypto==='litecoin' ? litecoin:retioIcon;
    return (
        <Container>
            <Coin src={cryptImg} />
            <div>{amount}</div>
            <PlusBtn>
                <Plus src={plusicon} />
            </PlusBtn>
            
        </Container>
    )
};

export default Crypto;