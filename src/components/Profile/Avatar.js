import styled from "styled-components";
import avatarimg from '../../assets/images/user.png';
import editIcon from '../../assets/images/edit.png';
import { useGlobalContext } from "../App/context";

const Conatiner = styled.div`
    
`;
const Avatarpan = styled.div`
    margin-top:35px;
    margin-left:auto;
    margin-right:auto;
    width:170px;
    height:170px;
    cursor:pointer;
    &:hover{
        & #avataredit{
            visibility:visible;
        }
        & #avatarimg{
            opacity:0.6;
        }

    }
`;
const AvatarImg = styled.img`
    width:170px;
    height:170px;
    border-radius:50%;
    position:relative;
    
`;
const EditBtn = styled.img`
    width:24px;
    height:24px;
    position:absolute;
    visibility:hidden;
    margin-top: 72px;
    margin-left: -95px;
`;

const Avatar = ({setIsSetting}) => {
    const {toggleModal}=useGlobalContext();

    return (
        <Conatiner>
            <Avatarpan
                onClick={()=>{
                    if(setIsSetting){
                        setIsSetting(true);
                    }

                    toggleModal('profileimg');
                }}
            >
                <AvatarImg id="avatarimg" src={avatarimg} />
                <EditBtn id="avataredit" src={editIcon} />
            </Avatarpan>
        </Conatiner>

    )
}

export default Avatar;