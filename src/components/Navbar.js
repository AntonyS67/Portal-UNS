import React from 'react'
import {url} from '../config/host'

function Navbar({links,settings}) {

    const showNav = () => {
        const navbar = document.getElementById('navbar');
        const nav = document.getElementById('ul');
        const icon = document.getElementById('bars');
        nav.classList.toggle('show');
        navbar.classList.toggle('rwd');
        if(icon.classList.contains('fa-bars')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times')
        }else{
            icon.classList.remove('fa-times')
            icon.classList.add('fa-bars');
        } 
    }

    const styleNav = {
        backgroundColor: settings.backgroundmenu,
        color: settings.colormenu
    }
    if(Object.keys(settings).length === 0) return null;
    return (
        <nav className="navbar" id="navbar" style={styleNav}>
            <img src={`${url}/api/logo/${settings.logo}`} alt="logo"/>
            <ul id="ul">
                {
                    links.map(link => (
                        <li key={link.id}><a href={link.href}>{link.title}</a></li>
                    ))
                }
            </ul>
            <div className="hamburger" onClick={showNav}><i className="fas fa-bars" id="bars"></i></div>  
        </nav>
    )
}

export default Navbar
