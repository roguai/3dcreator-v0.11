import * as ACTION_TYPES from './actionType';

export const modal=(name)=>{
    return {
        type:ACTION_TYPES.TOGGLE_MODAL,
        payload:{name:name}
    }
}

export const changeProfile=(username)=>{
    return {
        type:ACTION_TYPES.CHANGE_PROFILE,
        payload:{username: username}
    }
}