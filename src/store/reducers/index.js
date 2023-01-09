import * as ACTION_TYPES from '../actions/actionType';

export const mainReducer=(state, action)=>{
    if(action.type===ACTION_TYPES.TOGGLE_MODAL){
        return {
            ...state,
            isModalOpen:{
                status:!state.isModalOpen.status,
                name:action.payload.name
            }
        }
    }
    else if(action.type===ACTION_TYPES.CHANGE_PROFILE){
        return {
            ...state,
            profile:{
                username:action.payload.username
            }
        }
    }
    else if(action.type===ACTION_TYPES.CHANGE_THEME){
        return {
            ...state,
            theme:action.payload.theme
        }
    }
}