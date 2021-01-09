import React,{useReducer} from 'react';

import ConfigContext from './configContext';
import ConfigReducer from './configReducer';

import {
    GET_SETTINGS
} from '../../types';

import clientAxios from '../../config/axios';

const ConfigState = (props) => {
    const initialState = {
        settings : []
    }
    const [state,dispatch] = useReducer(ConfigReducer,initialState);

    const getSettings = async () => {
        try {
            const result = await clientAxios.get('api/config/show');
            dispatch({
                type: GET_SETTINGS,
                payload:result.data
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <ConfigContext.Provider
            value={{
                settings:state.settings,
                getSettings
            }}
        >
            {props.children}
        </ConfigContext.Provider>
    )
}

export default ConfigState;