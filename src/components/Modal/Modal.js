import React, {useEffect, useRef} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import {useGlobalContext} from '../App/context';
import ModalDelete from "./ModalDelete";

const StyledModal=styled.div`
    position:fixed;
    inset:0 0 0 0;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0 24px;
    background-color:rgba(255, 255, 255, 0.14);
    z-index:100;
    backdrop-filter: blur(3px);
`;
const Modal = ()=>{
    const modalRef=useRef();
    const {state, toggleModal}=useGlobalContext();
    const isDeleteModal=state.isModalOpen.name==='delete';
    const handleClickOutsideModal=(event)=>{
        const target=event.target;
        if(target===modalRef.current) toggleModal();
    };

    useEffect(()=>{
        document.addEventListener('click', handleClickOutsideModal );
        return ()=>{
            document.removeEventListener('click', handleClickOutsideModal);
        }
    }, []);
    const modal=(
        <StyledModal
            aria-modal
            aria-label="Confirmation"
            tabIndex={-1}
            role="dialog"
            ref={modalRef}
            
        >
            {isDeleteModal && <ModalDelete />}
        </StyledModal>
    );

    return createPortal(modal, document.body);
};

export default Modal;