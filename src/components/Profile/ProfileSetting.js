import { useState } from "react";
import styled, {css} from "styled-components";
import Avatar from "./Avatar";
import copyIcon from '../../assets/images/copy.png';
import { useGlobalContext } from "../App/context";


const Container=styled.div`
    width:708px;
    margin: 10px auto 10px auto;
`;

const InputPan=styled.div`
    width:100%;
    margin-top:35px;
    border-radius:15px;
    background:rgba(255, 255, 255, 0.05);
    display:flex;
    flex-direction:column;
    padding:32px 20px;
    gap:24px;
    text-align:left;
`;

const Title=styled.p`
    margin-top:60px;
    margin-bottom:40px;
    font-size:24px;
    line-height:28.8px;
    font-weight:600;
`;

const Label=styled.label`
    font-size:18px;
    line-height:18px;
    font-weight:700;
`;

const Username=styled.input`
    width:100%;
    height:52px;
    font-size:20px;
    font-weight:600;
    line-height:20px;
    border-radius:8px;
    background:#1E1A2F;
    border:0;
    padding: 20px 16px;
    margin-top:10px;
    color:white;
    font-family:inherit;
`;

const Bio=styled.textarea`
    width:100%;
    height:116px;
    font-size:20px;
    font-weight:600;
    line-height:20px;
    border-radius:8px;
    background:#1E1A2F;
    border:0;
    padding: 20px 16px;
    margin-top:10px;
    color:white;
    font-family:inherit;
`;

const WalletAdress=styled.div`
    width:100%;
    position:relative;
`;

const WalletAdressText=styled.input`
    width:100%;
    height:52px;
    font-size:20px;
    font-weight:600;
    line-height:20px;
    border-radius:8px;
    background:#1E1A2F; 
    border:0;
    padding: 20px 48px 20px 16px;
    margin-top:10px;
    color:white;
    font-family:inherit;
    background-image:url(${copyIcon}) no-repeat;
`;

const WalletAdressCopy=styled.div`
    position:absolute;
    top:24px;
    right:17px;
    cursor:pointer;
`;

const InputArea=styled.div`
    width:100%;
`;

const BtnGroup=styled.div`
    margin-top:32px;
    display:flex;
    justify-content:space-between;

`;

const Button=styled.button`
    border:0;
    border-radius:10px;
    background:#222133;
    font-size:20px;
    line-height:20px;
    font-weight:600;
    color:white;
    width:220px;
    height:64px;
    cursor:pointer;
    &:disabled{
        color:rgba(255, 255, 255, 0.32);
    }
    ${({$active})=>$active?css`background:#6AFFE5; color:black !important;`:''}
`

const ProfileSetting=({setIsSetting})=>{
    const [username, setUsername]=useState('');
    const [bio, setBio]=useState('');
    const {changeProfile}=useGlobalContext();
    return (
        <Container>
            <Title>Profile Settings</Title>
            <Avatar />
            <InputPan>
                <InputArea>
                    <Label>Username</Label>
                    <Username 
                        type="text" 
                        placeholder="Enter item name"
                        value={username}
                        onChange={(e)=>{
                            setUsername(e.target.value);
                        }}    
                    />
                </InputArea>
                <InputArea>
                    <Label>Bio</Label>
                    <Bio 
                        placeholder="Tell the world your story!"
                        value={bio}
                        onChange={(e)=>{
                            setBio(e.target.value);
                        }}
                    />
                </InputArea>
                <InputArea>
                    <Label>Wallet address</Label>
                    <WalletAdress>
                        <WalletAdressText type="text" readOnly={true} value="0x314432c4af432jbccsa4534jnbhy534234"/>
                        <WalletAdressCopy>
                            <img src={copyIcon} />
                        </WalletAdressCopy>
                    </WalletAdress>
                    
                </InputArea>
            </InputPan>
            <BtnGroup>
                <Button
                    $back
                    onClick={()=>{
                        setIsSetting(false);
                    }}
                >
                    Back
                </Button>
                <Button
                    $save
                    disabled={username===''}
                    $active={username!==''}
                    onClick={()=>{
                        changeProfile(username);
                        setIsSetting(false);
                    }}
                >
                    Save
                </Button>
            </BtnGroup>
        </Container>
    )
};

export default ProfileSetting;