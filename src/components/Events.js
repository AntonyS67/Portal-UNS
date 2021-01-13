import React from 'react'

function Events({events,title}) {;
    if (Object.keys(events).length === 0) return null;
    return (
        <section className="section-events">
            <div className="titles">
                <h2>{title}</h2>
            </div>
            <div className="section-cards">
                {
                    events.map(event => (
                        <div key={event.id} className="card slide-card">
                            <div className="card-header">
                                <a href="!#">{event.title}</a>
                                <p>{event.date}</p>
                            </div>
                            <div className="card-body">
                                <img src={event.image} alt={event.title}/>
                            </div>
                            <div className="card-footer">
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))
                }
                
            </div>
            <div className="section-card-buttons">
                <a href="!#">Ver todos los Eventos</a>
            </div>
        </section>
    )
}

export default Events
