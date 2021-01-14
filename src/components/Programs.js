import React, { useContext, useEffect } from 'react'
import ProgramContext from '../context/programs/programContext';
import {url} from '../config/host';

function Programs() {
    const programContext = useContext(ProgramContext);
    const {programs,getPrograms} = programContext;

    useEffect(() => {
        getPrograms();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(Object.keys(programs).length === 0) return null;

    return (
        <section className="section-programs">
            <div className="titles">
                <h2>Programas</h2>
            </div>
            <div className="slideshow">
                {
                    programs.map(program => {
                        if(program.estado === 1){
                            return (
                                <div key={program._id} className="slideshow-image">
                                    <div className="slideshow-container">
                                        <img src={`${url}/api/Programa/${program.portada}`} alt={program.titulo}/>
                                    </div>
                                    <div className="slideshow-banner">
                                        <a href="!#">{program.titulo}</a>
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })
                }
            </div>
        </section>
    )
}

export default Programs
