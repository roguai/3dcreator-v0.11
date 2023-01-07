import React from "react";
import styled from "styled-components";

import avatarimg from '../../assets/images/user.png';
import Setting from "./Setting";

const Conatiner = styled.div`
    border-radius:15px 15px 0 0;
    width:1000px;
    height: 100%;
    margin-left: auto;
    margin-right:auto;
    background:${({ theme }) => theme.colors.sidebarbg};
    backdrop-filter: blur(6px);
    text-align:center;
`;

const Avatar = styled.img`
    width:170px;
    height:170px;
    margin-top:35px;
    margin-left:auto;
    margin-right:auto;
    border-radius:50%;
`;

const UserName = styled.p`
    margin-top: 15px;
    font-size: 34px;
    font-weight: 600;
    line-height: 34px;
`;


const Message = styled.p``;

const TabMenu = styled.div``;

const Profile = () => {
    return (
        <Conatiner>

            <Avatar src={avatarimg} />
            <UserName>Unnamed</UserName>
            <Setting />
        </Conatiner>
    );
}

export default Profile;