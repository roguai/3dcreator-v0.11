import React from "react";
import styled, {css} from "styled-components";

import menuicon from '../../assets/images/menu.png';
import wheelicon from '../../assets/images/wheel.png';
import asseticon from '../../assets/images/assets.png';
import signouticon from '../../assets/images/signout.png';
import charticon from '../../assets/images/chart.png';
import wheelselectIcon from '../../assets/images/wheel_select.png';

import { NavLink } from 'react-router-dom';

const Container = styled.div`
    border-radius: 15px 15px 0 0;
    width:60px;
    left:10px;
    position:fixed;
    top:80px;
    background:${({ theme }) => theme.colors.sidebarbg};
    bottom:0px;
    backdrop-filter: blur(6px);
`;

const MenuItem = styled(NavLink)`
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
    &.active{
        background: rgba(255, 255, 255, 0.08);
    }


`;

const Menu = styled.div`
    margin-top:15px;
`;

const SignOut = styled.div`
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

const links = [
    {
        to: '/profile',
        icon: menuicon
    },
    {
        to: '/assetcreator',
        icon: wheelicon
    },
    {
        to: '/profile1',
        icon: asseticon
    },
    {
        to: '/profile2',
        icon: charticon
    }
]

const Sidebar = () => {
    return (
        <Container>
            <Menu>
                {
                    links.map((v, index) => (
                        <MenuItem
                            key={index}
                            to={v.to}
                            icon={v.icon}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            <img src={v.icon} />
                        </MenuItem>
                    ))
                }

            </Menu>
            <SignOut>
                <img src={signouticon} />
            </SignOut>

        </Container>
    )
};

export default Sidebar;