import { useState, useEffect, useReducer } from "react";
import { mainReducer } from "../store/reducers";
import * as ACTIONS from '../store/actions/index';

const initialState={
    isModalOpen:{status:false, name:''},
    profile:{
        username:'Unnamed'
    }
};

const useMainHook=()=>{
    const [state, dispatch]=useReducer(mainReducer, initialState);
    
    const toggleModal=(name)=>{
        dispatch(ACTIONS.modal(name));
    };

    const changeProfile=(username)=>{
        dispatch(ACTIONS.changeProfile(username));
    }

    return {
        state, 
        toggleModal,
        changeProfile
    }
};

export default useMainHook;