import React from 'react'

function Footer({settings}) {
    

    const styleFooter = {
        backgroundColor: settings.backgroundfooter ? settings.backgroundfooter : '#b8363d'
    }
    
    const styleText = {
        color: settings.colorfooter ? settings.colorfooter :'#fff',
    }
    return (
        <footer style={styleFooter}>
            <div className="info" style={styleText}>
                <p>{settings.direccion}</p>
                <p>Central Telefonica: {settings.telefono}</p>
                <p>©{new Date().getFullYear()} Dirección de imagen institucional</p>
                <p>Transparencia Universitaria: {settings.correo}</p>
            </div>
            <div className="copy" style={styleText}>
                ©{new Date().getFullYear()} UNS - Universidad Nacional del Santa | Todos los derechos reservados
            </div>
            <div className="socials">
                {settings.facebook && (<a href={settings.facebook} style={styleText}><i className="fab fa-facebook-square"></i></a>)}
                {settings.instagram && (<a href={settings.instagram} style={styleText}><i className="fab fa-instagram-square"></i></a>)}
                {settings.twitter && (<a href={settings.twitter} style={styleText}><i className="fab fa-twitter-square"></i></a>)}
            </div>
        </footer>
    )
}

export default Footer
