import React, {useState, useEffect, useContext} from "react";
import Provider from "../shared/Provider/Provider";
import useMainHook from "../../hooks/useMainHook";
const AppContext=React.createContext();

const AppProvider=({children})=>{
    const {
        state, toggleModal, changeProfile, changeTheme, changeModelcustomize, changeCurrentModel
    } = useMainHook();
    const [windowWidth, setWindowWidth]=useState(window.innerWidth);
    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    },[]);

    const handleResize=()=>{
        setWindowWidth(window.innerWidth);
    };

    return (
        <AppContext.Provider
            value={{
                windowWidth,
                state,
                toggleModal,
                changeProfile,
                changeTheme,
                changeModelcustomize,
                changeCurrentModel
            }}
        >
            <Provider themeColor={state.theme}>{children}</Provider>
        </AppContext.Provider>
    )
};

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppProvider};

