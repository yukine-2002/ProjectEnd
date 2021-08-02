import { typerAction } from "./user.type";
const INITIAL_STATE = {
    currentUser : null
}

const userREducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case typerAction.SET_CURRENT_USER:
            return {
                ...state,
                currentUser : action.payload
            }
        default : 
            return state;
    }
}

export default userREducer;