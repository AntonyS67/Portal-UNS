import React, { useContext, useEffect } from 'react'
import EventContext from '../context/events/eventContext';
import {url} from '../config/host';
import parser from 'html-react-parser'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function Events() {
    const eventContext = useContext(EventContext);
    const {events,getEvents} = eventContext;

    useEffect(() => {
        getEvents()
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[])

    return (
        <section className="section-events">
            <div className="titles">
                <h2>Eventos</h2>
            </div>
            {
                Object.keys(events).length === 0
                ?
                <p>No hay eventos</p>
                :
                    <>
                        <Swiper
                            tag="div"
                            className="section-cards"
                            id="main"
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
                            navigation={{
                                nextEl:'.button-next',
                                prevEl:'.button-prev'
                            }}
                            autoplay
                        >
                            {
                                events.map(event => {
                                    if(event.estado === 1 ){
                                        return (
                                            <SwiperSlide tag="div" key={event._id} className="card slide-card">
                                                <div className="card-header">
                                                    <a href="!#">{event.titulo}</a>
                                                    <p>{event.date}</p>
                                                </div>
                                                <div className="card-body">
                                                    <img src={`${url}/api/Evento/${event.portada}`} alt={event.titulo}/>
                                                </div>
                                                <div className="card-footer">
                                                    {parser(event.descripcion.substr(0,130).concat('...'))}
                                                </div>
                                            </SwiperSlide>
                                        )
                                    }
                                    return null;
                                }
                            )}
                        </Swiper>
                        {
                            Object.keys(events).length > 3 && (
                                <div className="section-card-buttons">
                                    <button className="prev button-prev">&#10094;</button>
                                    <a href="!#">Ver todos los Eventos</a>
                                    <button className="next button-next">&#10095;</button>
                                </div>
                            )
                        }
                    </>
            }
        </section>
    )
}

export default Events
