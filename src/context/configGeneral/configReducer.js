import {
    GET_SETTINGS
} from '../../types/index'

export default (state,action) => {
    switch (action.type) {    
        case GET_SETTINGS:
            return {
                ...state,
                settings:action.payload
            }
        default:
            return state;
    }
}