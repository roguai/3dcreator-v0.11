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
    width: 100%;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 12px;
    cursor:pointer;
`;

const Menu=styled.ul`
`;

const SignOut=styled.div`
    position: absolute;
    bottom: 43px;
    text-align: center;
    width: 100%;
    cursor:pointer;
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