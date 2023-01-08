import React, { useState } from "react";
import styled from "styled-components";

import ProfileInfo from "./ProfileInfo";
import ProfileSetting from './ProfileSetting';


const Conatiner = styled.div`
    border-radius:15px 15px 0 0;
    width:1000px;
    height: 100%;
    margin-left: auto;
    margin-right:auto;
    background:${({ theme }) => theme.colors.sidebarbg};
    backdrop-filter: blur(6px);
    text-align:center;
    overflow-y:auto;
    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
`;

const Panel = styled.div`
    margin-bottom:40px;
`;


const Profile = () => {
    const [isSetting, setIsSetting] = useState(false);

    return (
        <Conatiner>
            <Panel>

                {!isSetting && 
                    <ProfileInfo 
                        setIsSetting={setIsSetting}
                    />}
                {isSetting && 
                    <ProfileSetting 
                        setIsSetting={setIsSetting}
                    />}

            </Panel>
        </Conatiner>
    );
}

export default Profile;