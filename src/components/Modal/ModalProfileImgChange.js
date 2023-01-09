import styled, {css} from "styled-components";
import ImageCropper from "../ImageCropper";
import { useGlobalContext } from "../App/context";

const Conatiner=styled.div`
    padding:40px;
    background:#000814;
    backdrop-filter: blur(6px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 15px;
    width:708px;
`;

const Title=styled.p`
    font-size:24px;
    font-weight:600;
    text-align:center;
`;

const CropPan=styled.div`
    margin-top:40px;
`;

const BtnGroup=styled.div`
    margin-top:40px;
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
`;
const ModalProfileImgChange=()=>{
    const {toggleModal, state}=useGlobalContext();
    const isProfileModal = state.isModalOpen.name === 'profileimg';
    const isModalOpen = state.isModalOpen.status;
    return (
        <Conatiner>
            <Title>Change Profile Image</Title>
            <CropPan>
                <ImageCropper isProfileModal={isProfileModal} isModalOpen={isModalOpen} />
            </CropPan>
            <BtnGroup>
                <Button
                    onClick={()=>{
                        toggleModal();
                    }}
                >
                    Cancel
                </Button>
                <Button
                    $active
                    onClick={()=>{
                        toggleModal();
                    }}
                >
                    Save
                </Button>
            </BtnGroup>

        </Conatiner>
    )

};

export default ModalProfileImgChange;