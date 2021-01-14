import React, { useContext, useEffect } from 'react'
import {url} from '../config/host'
import MenuContext from '../context/menu/menuContext';

function Navbar({settings}) {
    const menuContext = useContext(MenuContext);
    const {menus,getMenus} = menuContext;

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

    useEffect(() => {
        getMenus()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const styleNav = {
        backgroundColor: settings.backgroundmenu,
    }
    if(Object.keys(settings).length === 0) return null;
    return (
        <nav className="navbar" id="navbar" style={styleNav}>
            <img src={`${url}/api/logo/${settings.logo}`} alt="logo"/>
            <ul id="ul">
                {
                    menus.map((link) => {
                        if(link.status === 1){
                            return  <li key={link._id}><a href={link.href} style={{color:settings.colormenu}}>{link.title}</a></li>
                        }
                        return null;
                    })
                }
            </ul>
            <div className="hamburger" onClick={showNav}><i className="fas fa-bars" id="bars"></i></div>  
        </nav>
    )
}

export default Navbar
