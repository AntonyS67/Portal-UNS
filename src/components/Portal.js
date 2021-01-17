import React, { useContext, useEffect } from 'react'
import {url} from '../config/host'
import NewContext from '../context/new/newContext';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

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
            <Swiper
                slidesPerView={3}
                breakpoints={{
                    1200:{
                        slidesPerView:4
                    },
                    768:{
                        slidesPerView:3
                    },
                    600:{
                        slidesPerView:2
                    },
                    200:{
                        slidesPerView:1
                    }
                }}
                pagination
                autoplay
                effect="fade"
                id="main"
                className="slideshow slideshow-section-portal"
                tag="div"
            >
                {
                    news.map(notice => {
                        if(notice.estado === 1) {
                            return (
                                <SwiperSlide zoom={true} tag="div" key={notice._id} className="slideshow-cart" style={{backgroundImage:`url(${url}/api/Noticia/${notice.portada})`}}>
                                    <div className="icon">
                                        <p>{notice.subtitulo}</p>
                                    </div>
                                    <div className="slideshow-cart-title">
                                        <h3>{notice.titulo}</h3>
                                        <div className="text-divider"></div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                        return null;
                    })
                }
            </Swiper>
            <div className="slideshow-cart-control">
            </div>
        </section>
    )
}

export default Portal
