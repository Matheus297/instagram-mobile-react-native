import * as Types from '../Types';


export function changeStatus(){
    return {
        type: Types.CHANGE_STATUS,
        payload: {
            status: 4,
        }
    }
}