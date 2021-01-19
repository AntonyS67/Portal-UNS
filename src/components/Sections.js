import React, { useEffect, useState } from 'react'
import Events from './Events'
import Portal from './Portal'
import Programs from './Programs'
import Map from './Map'

function Sections({settings}) {
    const [showMapas,setShowMapas] = useState(true);
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
                if(seccion.toLowerCase() === 'mapas') setShowMapas(false)
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
                showPrograms ? (<Programs/>) : null
            }
            {
                showEvents ? (<Events/>) : null
            }
            {
                showMapas ? (<Map settings={settings}/>) : null
            }
            
        </>
    );
    
}

export default Sections
