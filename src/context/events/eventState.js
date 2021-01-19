import {GET_EVENTS} from '../../types'

import clientAxios from '../../config/axios'

import EventContext from './eventContext'
import EventReducer from './eventReducer'
import { useReducer } from 'react'

const EventState = props => {
    const initialState = {
        events: []
    }

    const [state,dispatch] = useReducer(EventReducer,initialState);

    const getEvents = async () => {
        try {
            const result = await clientAxios.get('api/evento/list');
            dispatch({
                type:GET_EVENTS,
                payload:result.data
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <EventContext.Provider
            value={{
                events:state.events,
                getEvents
            }}
        >
            {props.children}
        </EventContext.Provider>
    )
}

export default EventState;
