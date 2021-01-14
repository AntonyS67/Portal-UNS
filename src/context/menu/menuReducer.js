import {
    GET_MENUS
} from '../../types'

const MenuReducer = (state,action) => {
    switch (action.type) {
        case GET_MENUS:
            return {
                ...state,
                menus: action.payload
            }
        default:
            return state;
    }
}

export default MenuReducer;