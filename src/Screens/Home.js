import React, { useContext, useEffect } from 'react'
import Events from '../components/Events'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Navbar from '../components/Navbar'
import Portal from '../components/Portal'
import Programs from '../components/Programs'
import ConfigContext from '../context/configGeneral/configContext'
import NewContext from '../context/new/newContext'
import { linksNav, events, programs,secciones} from '../data'
import {url} from '../config/host';
import { Helmet } from 'react-helmet'
import Banner from '../components/Banner'

function Home() {
    const configContext = useContext(ConfigContext);
    const newContext = useContext(NewContext);
    const {settings,getSettings} = configContext;
    const {news,getNews} = newContext;

    useEffect(() => {
        getSettings()
        getNews()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <>
            <Helmet>
                <link rel="icon" href={`${url}/api/favicon/${settings.favicon}`} />
            </Helmet>
            <Navbar links={linksNav} settings={settings}/>
            <Banner settings={settings}/>
            {
                secciones.map(seccion => {
                    if(seccion.show){
                        switch (seccion.id) {
                            case 1:
                                return <Portal key={seccion.id} images={news} title={seccion.title}/>
                            case 2:
                                return <Programs key={seccion.id} programs={programs} title={seccion.title}/>
                            case 3:
                                return <Events key={seccion.id} events = {events} title={seccion.title}/>
                            default:
                                break;
                        }
                    }
                    return null;
                })
            }
            <Map/>
            <Footer settings={settings}/>
        </>
    )
}

export default Home
