import * as Types from '../Types';

const InitialState = {
    status: 2,
}


const AuthReducer = (state = InitialState, action) => {
    switch(action.type){
        case Types.CHANGE_STATUS:
            return {...state, status: action.payload.status}
        default: {
            return state;
        }    
    }
}


export default AuthReducer;


