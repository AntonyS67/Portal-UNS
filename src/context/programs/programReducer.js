import {
    GET_PROGRAMS
} from '../../types'

const ProgramReducer = (state,action) => {
    switch (action.type) {
        case GET_PROGRAMS:
            return {
                ...state,
                programs:action.payload
            }
        default:
            return state;
    }
}

export default ProgramReducer;