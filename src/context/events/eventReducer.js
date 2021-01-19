import {GET_EVENTS} from '../../types'

const EventReducer = (state,action) => {
    switch (action.type) {
        case GET_EVENTS:
            return {
                ...state,
                events:action.payload
            }
        default:
            return state;
    }
}

export default EventReducer;