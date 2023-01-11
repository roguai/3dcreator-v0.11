import * as ACTION_TYPES from './actionType';

export const modal=(name)=>{
    return {
        type:ACTION_TYPES.TOGGLE_MODAL,
        payload:{name:name}
    }
}

export const changeProfile=(username, isw)=>{
    return {
        type:ACTION_TYPES.CHANGE_PROFILE,
        payload:{username: username, iswalletConnect:isw}
    }
}

export const changeTheme=(theme)=>{
    return {
        type:ACTION_TYPES.CHANGE_THEME,
        payload: {theme:theme}
    }
}