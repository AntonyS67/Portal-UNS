import clientAxios from '../../config/axios';

import ProgramContext from './programContext';
import ProgramReducer from './programReducer';

import {
    GET_PROGRAMS
} from '../../types';
import { useReducer } from 'react';

const ProgramState = (props) => {
    const initialState = {
        programs: []
    }

    const [state,dispatch] = useReducer(ProgramReducer,initialState);

    const getPrograms = async () => {
        try {
            const result = await clientAxios.get('api/programa/list')
            dispatch({
                type:GET_PROGRAMS,
                payload:result.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ProgramContext.Provider
            value={{
                programs: state.programs,
                getPrograms
            }}
        >
            {props.children}
        </ProgramContext.Provider>
    )
}

export default ProgramState;