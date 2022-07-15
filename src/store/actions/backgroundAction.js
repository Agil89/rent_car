import { CHANGE_BACKGROUND } from "../types"



export const changeBackground = (payload) =>{
    return {
        type:CHANGE_BACKGROUND,
        payload:payload
    }
}