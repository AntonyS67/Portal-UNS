import { useReducer } from 'react';

import NewContext from './newContext';
import NewReducer from './newReducer';

import clientAxios from '../../config/axios';

import {
    GET_NEWS
} from '../../types'

const NewState = (props) => {
    const initialState = {
        news: []
    }
    const [state,dispatch] = useReducer(NewReducer,initialState);

    const getNews = async () => {
        try {
            const result = await clientAxios.get('api/noticia/list')
            dispatch({
                type:GET_NEWS,
                payload:result.data
            })
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <NewContext.Provider
            value={{
                news:state.news,
                getNews
            }}
        >
            {props.children}
        </NewContext.Provider>
    )
}

export default NewState;