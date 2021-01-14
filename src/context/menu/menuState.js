

import MenuContext from './menuContext';
import MenuReducer from './menuReducer';

import clientAxios from '../../config/axios';

import {
    GET_MENUS
} from '../../types'
import { useReducer } from 'react';

const MenuState = props => {
    const initialState = {
        menus:[]
    }

    const [state,dispatch] = useReducer(MenuReducer,initialState);

    const getMenus = async () => {
        try {
            const resp = await clientAxios.get('api/menu/list');
            dispatch({
                type:GET_MENUS,
                payload:resp.data
            })
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <MenuContext.Provider
            value={{
                menus:state.menus,
                getMenus
            }}
        >
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuState;