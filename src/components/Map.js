import React from 'react'
import {url} from '../config/host'

function Map({settings}) {
    return (
        <section className="section-map">
            <div className="">
                <div className="img-logo">
                    <img src={`${url}/api/logo/${settings.logo}`} alt="logo uns" width="300px" height="150px"/>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="!#">Universidad</a></li>
                        <li><a href="!#">Directorio</a></li>
                        <li><a href="!#">Intranet</a></li>
                        <li><a href="!#">Pago Virtual - Fut - Tarifario UNS</a></li>
                        <li><a href="!#">Galeria</a></li>
                        <li><a href="!#">Transparencia</a></li>
                    </ul>
                    <ul>
                        <li><a href="!#">Consultorio Juridico Gratuito UNS</a></li>
                        <li><a href="!#">Convocatorias</a></li>
                        <li><a href="!#">Bolsa Laboral</a></li>
                        <li><a href="!#">Comite Electoral</a></li>
                        <li><a href="!#">Sala de Docentes</a></li>
                        <li><a href="!#">Entrar</a></li>
                    </ul>
                </div>
            </div>
            <div className="map">
                <img src="images/mapsuns.png" alt="mapa uns" />
            </div>
        </section>
    )
}

export default Map
