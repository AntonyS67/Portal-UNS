import React, { useEffect, useState } from 'react'
import Events from './Events'
import Portal from './Portal'
import Programs from './Programs'
import {events, programs} from '../data'

function Sections({settings}) {
    const [showNews,setShowNews] = useState(true);
    const [showPrograms,setShowProgramas] = useState(true);
    const [showEvents,setShowEvents] = useState(true);

    const {secciones} = settings;
    useEffect(()=>{
        if(secciones){
            secciones.map(seccion => {
                if(seccion.toLowerCase() === 'noticias') setShowNews(false)
                if(seccion.toLowerCase() === 'programas') setShowProgramas(false)
                if(seccion.toLowerCase() === 'eventos') setShowEvents(false)
                return null;
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[secciones])

    return(
        <>
            {
                showNews ? (<Portal/>) : null
            }
            {
                showPrograms ? (<Programs programs={programs}/>) : null
            }
            {
                showEvents ? (<Events events = {events}/>) : null
            }
        </>
    );
    
}

export default Sections
