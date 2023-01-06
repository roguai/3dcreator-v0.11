import React, {useState, useEffect, useContext} from "react";
import Provider from "../shared/Provider/Provider";

const AppContext=React.createContext();

const AppProvider=({children})=>{
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
                windowWidth
            }}
        >
            <Provider>{children}</Provider>
        </AppContext.Provider>
    )
};

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppProvider};

