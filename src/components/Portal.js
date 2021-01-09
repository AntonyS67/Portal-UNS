import React from 'react'

function Portal({images}) {

    let slideIndex = 1;
  
    const showSlides = (n,classSlide,dot) => {
        let i;
        let slides = document.getElementsByClassName(classSlide);
        let dots = document.getElementsByClassName(dot);
        if(n > slides.length) slideIndex = 1;
        if(n < 1) slideIndex = slides.length;
        for(i=0;i<slides.length;i++){
            slides[i].style.display = "none";
        }
        for(i=0;i<dots.length;i++){
            dots[i].className = dots[i].className.replace(" active","");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

    const plusSlides = (n,classSlide,dot) => {
        showSlides(slideIndex +=n,classSlide,dot)
    }

    const currentSlide = (n,classSlide,dot) => {
        showSlides(slideIndex=n,classSlide,dot)
    }

    return (
        <section className="section-portal">
            <div className="titles">
                <h2>Portal Academico</h2>
            </div>
            <div className="slideshow">
                {
                    images.map((image,index) => (
                        <div className="slideshow-image" key={index+Math.random(10)}>
                            {image.map((img,i) => (
                                <div key={img.id+Math.random(10)}className={`slideshow-container mySlides${index} fade ${i>0 ? 'd-none' : ''}`} >
                                    <img src={img.image} alt={img.title}/>
                                </div>
                            ))}
                            <button className="prev" onClick={() => plusSlides(-1,`mySlides${index}`,`dot${index}`)}>&#10094;</button>
                            <button className="next" onClick={() => plusSlides(1,`mySlides${index}`,`dot${index}`)}>&#10095;</button>
                            <div className="slide-indicators">
                                {
                                    image.map((img,j) => (
                                        <span key={img.id} className={`dot dot${index} ${j===slideIndex-1 ? 'active' : ''}`} onClick={() => currentSlide(j,`mySlides${j}`,`dot${j}`)}></span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Portal
