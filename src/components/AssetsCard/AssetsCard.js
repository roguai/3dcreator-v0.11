import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { useGlobalContext } from "../App/context";
import avatar from '../../assets/images/Ikbal.png';
import etherLogo from '../../assets/images/Ethereum_Logo.png';
import editIcon from '../../assets/images/edit.png';
import trashIcon from '../../assets/images/trash.png';
import exportIcon from '../../assets/images/export.png';

const Card=styled.div`
    width:215px;
    height:320px;
    border-radius:8px;
    background:#141325;
    padding:10px;
    text-align:left;
    position:relative;
    &:hover{
        & .btngroup{
            visibility:visible
        }
        & .avatar{

        }
    }
`;

const Img=styled.img`
    height:200px;
    width:195px;
    padding:20px 17px;
    background:#1B1A2C;
    border-radius:8px;
`;

const Name=styled.p`
    font-size:12px;
    font-weight:600;
    margin-top:12px;
    line-height:14.4px;
    opacity:0.62;
`;

const Feeling=styled.p`
    font-size:16px;
    font-weight:600;
    line-height:19.2px;
    margin-top:8px;
    margin-bottom:14px;
`;
const Divide=styled.div`
    background: radial-gradient(61.03% 2380000.18% at 51.28% 49.93%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%);
    border-radius:6px;
    height:1px;
`
const PricePan=styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:12px;
`;

const PriceText=styled.div`
    font-size:12px;
    font-weight:600;
    line-height:12px;
    opacity:0.62;
    padding-top:1px;
`;

const Price=styled.div`
    font-size:16px;
    font-weight:500;
    line-height:16px;
    margin-right:26px;
    &:after{
        content: '';
        position: absolute;
        background: url(${etherLogo}) no-repeat center;
        width: 16px;
        height: 16px;
        margin-left: 5px;
        margin-top: 1px;
        background-size: cover;
    }
`;

const Button = styled(Link)`
    border-radius:50%;
    border:0;
    cursor:pointer;
    width:36px;
    height:36px;
    align-items: center;
    display: flex;
    justify-content:center;
}
`;

const BtnGroup=styled.div`
    display: flex;
    gap: 10px;
    width: 195px;
    height:200px;
    justify-content: center;
    position: absolute;
    top:10px;
    visibility:hidden;
    border-radius:6px;
    background:rgba(27, 26, 44, 0.64);
    align-items:center;
    transition:background 1s;
`;


const AssetsCard=()=>{
    const {toggleModal}=useGlobalContext();

    return (
        <Card>
            <Img className="avatar" src={avatar} />
            <Name>Robert Dickerson</Name>
            <Feeling>No Feeling is Final</Feeling>
            <Divide />
            <PricePan>
                <PriceText>Price:</PriceText>
                <Price>
                    0.65

                </Price>
            </PricePan>
            <BtnGroup className="btngroup">
                <Button style={{background:'#3B82F6'}} to='/assetcreator'>
                    <img src={editIcon} />
                </Button>
                <Button style={{background:'#F2994A'}}>
                    <img src={exportIcon} />
                </Button>
                <Button 
                    style={{background:'#EB5757'}}
                    onClick={()=>{
                        toggleModal('delete');
                    }}
                >
                    <img src={trashIcon} />
                </Button>
            </BtnGroup>

        </Card>
    )
};

export default AssetsCard;