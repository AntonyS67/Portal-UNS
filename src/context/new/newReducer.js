import {
    GET_NEWS
} from '../../types'

const NewReducer = (state,action) => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                news:action.payload
            }
        default:
            return state;
    }
}
export default NewReducer;