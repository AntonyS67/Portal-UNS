import React from 'react'
import {url} from '../config/host'

function Banner({settings}) {
    if(Object.keys(settings).length === 0) return null;
    return (
        <section className="banner" style={{backgroundImage:`url(${url}/api/portada/${settings.portada})`}}></section>
    )
}

export default Banner
