import React, { useContext, useEffect } from 'react'
import {url} from '../config/host'
import NewContext from '../context/new/newContext';

function Portal() {
    const newContext = useContext(NewContext);
    const {news,getNews} = newContext;
    
    useEffect(() => {
        getNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(Object.keys(news).length === 0) return null;

    return (
        <section className="section-portal">
            <div className="titles">
                <h2>Noticias</h2>
                <a href="!#">Ver todas las noticias <i className="fas fa-plus-circle"></i></a>
            </div>
            <div className="slideshow slideshow-section-portal">
                {
                    news.map(notice => {
                        if(notice.estado === 1) {
                            return (
                                <div key={notice._id} className="slideshow-cart" style={{backgroundImage:`url(${url}/api/Noticia/${notice.portada})`}}>
                                    <div className="icon">
                                        <p>{notice.subtitulo}</p>
                                    </div>
                                    <div className="slideshow-cart-title">
                                        <h3>{notice.titulo}</h3>
                                        <div className="text-divider"></div>
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })
                }
            </div>
            <div className="slideshow-cart-control">
            </div>
        </section>
    )
}

export default Portal
