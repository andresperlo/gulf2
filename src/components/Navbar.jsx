import React from 'react'

import frente1 from '../img/frente1.jpg'
import adelante from '../img/adelante.jpg'
import patio from '../img/patio.jpg'
import kiosco from '../img/kiosco.jpg'
import estacion from '../img/estacion.jpg'
import costado2 from '../img/costado2.jpg'
import logo from '../img/logo.png'

function Navbar() {
    return (
        <div>
            <div id="carouselExampleFade" className="div-Carousel carousel slide carousel-fade" data-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={frente1} className="d-block w-100 class-img-css" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={adelante} className="d-block w-100 class-img-css" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={patio} className="d-block w-100 class-img-css" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={kiosco} className="d-block w-100 class-img-css" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={costado2} className="d-block w-100 class-img-css" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={estacion} className="d-block w-100 class-img-css" alt="..." />
                    </div>
                </div>
                <div className='neon-css'>
                    <img src={logo} className='imagen-neon-css' alt="" />
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                </a>
            </div>
        </div>
    )
}

export default Navbar;