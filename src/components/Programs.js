import React from 'react'

function Programs({programs}) {
    return (
        <section className="section-programs">
            <div className="titles">
                <h2>Nuestros Programas</h2>
            </div>
            <div className="slideshow">
                {
                    programs.map(program => (
                        <div key={program.id} className="slideshow-image">
                            <div className="slideshow-container">
                                <img src={program.image} alt={program.title}/>
                            </div>
                            <div className="slideshow-banner">
                                <a href="!#">{program.title}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Programs
