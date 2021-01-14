import React, { useContext, useEffect } from 'react'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Navbar from '../components/Navbar'
import ConfigContext from '../context/configGeneral/configContext'
import {url} from '../config/host';
import { Helmet } from 'react-helmet'
import Banner from '../components/Banner'
import Sections from '../components/Sections'

function Home() {
    const configContext = useContext(ConfigContext);
    const {settings,getSettings} = configContext;

    useEffect(() => {
        getSettings()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <>
            <Helmet>
                <link rel="icon" href={`${url}/api/favicon/${settings.favicon}`} />
            </Helmet>
            <Navbar settings={settings}/>
            <Banner settings={settings}/>
            <Sections settings={settings}/>
            <Footer settings={settings}/>
        </>
    )
}

export default Home
