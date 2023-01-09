import React from "react";
import styled from "styled-components";

import menuicon from '../../assets/images/menu.png';
import wheelicon from '../../assets/images/wheel.png';
import asseticon from '../../assets/images/assets.png';
import signouticon from '../../assets/images/signout.png';
import charticon from '../../assets/images/chart.png';

const Container=styled.div`
    border-radius: 15px 15px 0 0;
    width:60px;
    left:10px;
    position:fixed;
    top:80px;
    background:${({theme})=>theme.colors.sidebarbg};
    bottom:0px;
    backdrop-filter: blur(6px);
`;

const MenuItem=styled.li`
    height: 40px;
    width: 40px;
    margin: 8px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    
    cursor:pointer;
    &:hover{
        background: rgba(255, 255, 255, 0.08);
    }
`;

const Menu=styled.ul`
    margin-top:15px;
`;

const SignOut=styled.div`
    position: absolute;
    bottom: 43px;
    margin-left:10px;
    height: 40px;
    width: 40px;
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    &:hover{
        background: rgba(255, 255, 255, 0.08);
    }
`;

const Sidebar=()=>{
    return (
        <Container>
            <Menu>
                <MenuItem>
                    <img src={menuicon} />
                </MenuItem>
                <MenuItem>
                    <img src={wheelicon} />
                </MenuItem>
                <MenuItem>
                    <img src={asseticon} />
                </MenuItem>
                <MenuItem>
                    <img src={charticon} />
                </MenuItem>
            </Menu>
            <SignOut>
                <img src={signouticon} />
            </SignOut>

        </Container>
    )
};

export default Sidebar;