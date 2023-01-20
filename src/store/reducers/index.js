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
                username:action.payload.username,
                iswalletConnect:action.payload.iswalletConnect,
                accountId:action.payload.accountId,
                balance:action.payload.balance
            }
        }
    }
    else if(action.type===ACTION_TYPES.CHANGE_THEME){
        return {
            ...state,
            theme:action.payload.theme
        }
    }
    else if(action.type===ACTION_TYPES.CHANGE_MODEL_CUSTOMIZE){
        return {
            ...state,
            modelcustomize:{
                ...state.modelcustomize,
                ...action.payload
            }
        }
    }

    else if(action.type===ACTION_TYPES.CHANGE_CURRENT_MODEL){
        return {
            ...state,
            currentModel:{
                ...action.payload
            }
        }
    }
}