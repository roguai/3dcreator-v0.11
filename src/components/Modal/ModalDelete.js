import React from "react";
import styled, {css} from "styled-components";
import { useGlobalContext } from "../App/context";

const Container=styled.div`
    width:600px;
    height:239px;
    border-radius:15px;
    background:#05080A;
    text-align:center;
`;

const Title=styled.p``;
const Text=styled.p`
    font-size:24px;
    font-weight:600;
    line-height:28.8px;
    margin-top:60px;
`;
const BtnGroup=styled.div`
    margin:50px 40px;
    display: flex;
    justify-content:space-between;

`;
const Button=styled.button`
    width:150px;
    height:50px;
    font-size:16px;
    font-weight:600;
    border-radius:8px;
    color:white;
    cursor:pointer;
    ${({$cancel})=>$cancel?css`background:#222133`:css`background:#EB5757`}
`;

const ModalDelete=()=>{
    const {toggleModal}=useGlobalContext();
    return (
        <Container>
            <Text>Are you sure want to delete this asset?</Text>
            <BtnGroup>
                <Button
                    $cancel
                    onClick={()=>{
                        toggleModal();
                    }}
                >
                    Cancel
                </Button>
                <Button
                    $delete
                    onClick={()=>{
                        toggleModal();
                    }}
                >
                    Delete
                </Button>
            </BtnGroup>
        </Container>
    );
};

export default ModalDelete;