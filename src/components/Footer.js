import React, { useContext, useEffect } from 'react'
import ConfigContext from '../context/configGeneral/configContext';

function Footer() {
    const configContext = useContext(ConfigContext);
    const {settings,getSettings} = configContext;

    useEffect(() => {
        getSettings()
    },[])

    const styleFooter = {
        color: settings.colorfooter ? settings.colorfooter :'#fff',
        backgroundColor: settings.backgroundfooter ? settings.backgroundfooter : '#b8363d'
    }
    
    return (
        <footer style={styleFooter}>
            <div className="info">
                <p>{settings.direccion}</p>
                <p>Central Telefonica: {settings.telefono}</p>
                <p>©{new Date().getFullYear()} Dirección de imagen institucional</p>
                <p>Transparencia Universitaria: {settings.correo}</p>
            </div>
            <div className="copy">
                ©{new Date().getFullYear()} UNS - Universidad Nacional del Santa | Todos los derechos reservados
            </div>
            <div className="socials">
                {settings.facebook && (<a href={settings.facebook}><i className="fab fa-facebook-square"></i></a>)}
                {settings.instagram && (<a href={settings.instagram}><i className="fab fa-instagram-square"></i></a>)}
                {settings.twitter && (<a href={settings.twitter}><i className="fab fa-twitter-square"></i></a>)}
            </div>
        </footer>
    )
}

export default Footer
