import React from 'react'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import '../css/HomePages.css'
import logo from '../img/logo.png'
import empanadas from '../img/empanadas.jpg'
import humita from '../img/humita.jpg'
import tamales from '../img/tamales.jpg'
import asado from '../img/asado.jpg'
import sandwich from '../img/sandwich.jpg'
import sandwichlomito from '../img/sandwichlomito.jpg'
import sandwichternerayqueso from '../img/ternerayqueso.jpg'
import napo from '../img/napo.jpg'
import cafe from '../img/cafe.jpeg'
import cafeconleche from '../img/cafeconleche.jpg'
import cortadito from '../img/cortadito.jpg'
import cerveza from '../img/cerveza.jpg'
import gaseosas from '../img/gaseosas.jpg'
import aguas from '../img/aguasaborizada.jpg'
import home from '../img/home.jpg'
import lubricantes from '../img/lubricantes.jpg'
import frente1 from '../img/frente1.jpg'
import adelante from '../img/adelante.jpg'
import patio from '../img/patio.jpg'
import kiosco from '../img/kiosco.jpg'
import light from '../img/light.jpg'
import licuado from '../img/licuado.jpg'
import te from '../img/te.jpg'
import quilmes from '../img/quilmes.jpg'
import fresh from '../img/fresh.jpg'
import neon from '../img/neon.jpg'


function HomePages() {
    return (
        <div>
            <div>
                {/* Autor: Andres Perlo - CEl 3814443123 */}

                <div id="carouselExampleFade" class="div-Carousel carousel slide carousel-fade" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={frente1} class="d-block w-100 class-img-css" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={adelante} class="d-block w-100 class-img-css" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={patio} class="d-block w-100 class-img-css" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={kiosco} class="d-block w-100 class-img-css" alt="..." />
                        </div>
                    </div>
                    <div className='neon-css'>
                        <img src={neon} className='imagen-neon-css' alt="" />
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    </a>
                </div>
            </div>

            <div className='pt-5 pb-3 text-center'>
                <h3>Nuestro Menu</h3>
            </div>
            <div className="container">
                <h2 className='pb-3 h2-css'>Cafeteria</h2>
                <div className="card-columns">
                    <div className="card border border-dark">
                        <img src={cafe} className="card-img-top border-bottom border-dark img-css-cafeteria" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Cafe Negro</h5>
                        </div>
                    </div>
                    <div className="card border border-dark">
                        <img src={cortadito} className="card-img-top border-bottom border-dark img-css-cafeteria" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Cortadito</h5>
                        </div>
                    </div>
                    <div className="card border border-dark">
                        <img src={cafeconleche} className="card-img-top border-bottom border-dark img-css-cafeteria" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Cafe Con Leche</h5>
                        </div>
                    </div>
                    <div className="card border border-dark">
                        <img src={licuado} className="card-img-top border-bottom border-dark img-css-cafeteria" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Licuado + Tostado Mixto</h5>
                        </div>
                    </div>
                    <div className="card border border-dark">
                        <img src={light} className="card-img-top border-bottom border-dark img-css-cafeteria" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Desayuno / Merienda Light</h5>
                        </div>
                    </div>
                    <div className="card border border-dark">
                        <img src={te} className="card-img-top border-bottom border-dark img-css-cafeteria" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Te o Mate Cocido</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pb-3">
                <h2 className='py-3 h2-css'>Cocina</h2>
                <div className="card-columns">
                    <div>
                        <div className="card border border-dark cards-css">
                            <img src={empanadas} className="card-img-top border-bottom border-dark img-css-cocina" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Empanadas Tucumanas de la Campeona</h5>
                            </div>
                        </div>
                        <div className="card border border-dark cards-css">
                            <img src={asado} className="card-img-top border-bottom border-dark img-css-cocina" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Asado Tradicional</h5>
                            </div>
                        </div>
                        <div className="card border border-dark cards-css">
                            <img src={napo} className="card-img-top border-bottom border-dark img-css-cocina" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Napolitana Para Dos</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card-columns">
                    <div className="card border border-dark cards-css">
                        <img src={sandwich} className="card-img-top border-bottom border-dark img-css-cocina" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Sandwich</h5>
                        </div>
                    </div>
                    <div className="card border border-dark cards-css">
                        <img src={sandwichlomito} className="card-img-top border-bottom border-dark img-css-cocina" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Sandwich de Lomito</h5>
                        </div>
                    </div>
                    <div className="card border border-dark cards-css">
                        <img src={sandwichternerayqueso} className="card-img-top border-bottom border-dark img-css-cocina" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Sandwich de Ternera y Queso</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-3">
                <h2 className='pb-3 h2-css'>Bebidas</h2>
                <div className="card-columns">
                    <div>
                        <div className="card border border-dark">
                            <img src={quilmes} className="card-img-top border-bottom border-dark img-cards-gaseosas" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center ">Bebidas con Alcohol</h5>
                            </div>
                        </div>
                        <div className="card border border-dark ">
                            <img src={gaseosas} className="card-img-top border-bottom border-dark img-cards-gaseosas" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Bebidas Sin Alcohol</h5>
                            </div>
                        </div>
                        <div className="card border border-dark">
                            <img src={fresh} className="card-img-top border-bottom border-dark img-cards-gaseosas" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Agua Saborizada</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <footer className='text-white footer-css'>
                    <div className='ml5-css'>
                        <img src={logo} className='img-logo' alt="" />
                    </div>
                    <div className='text-center'>
                        <h2><i className="fas fa-map-marker-alt pb-3 css-h2 icon-avsiria"></i> Av. Siria 1968</h2>
                        <div className='d-flex justify-content-center'>
                            <h2><i className="fas fa-phone-volume pb-3 icon-css"></i></h2>
                            <h2><i class="fab fa-whatsapp icon-css mx-3"></i></h2>
                            <h2><i class="fas fa-envelope icon-css"></i></h2>
                        </div>
                        <h2 className='css-h2'>381 603 6303</h2>
                        <h2 className='tucuman-css'>San Miguel de Tucuman</h2>
                        <h2 className='tucuman-css'>TUCUMAN - ARGENTINA</h2>

                    </div>
                    <div className='mr5-css text-center'>
                        <h4 className='pb-3'>Haz cick para ver como llegar</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d292.7244576122078!2d-65.20442587848555!3d-26.803253375792462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c324224fc93%3A0xcfd53fbd8b316e29!2sLa%20Diagonal%20GNC!5e0!3m2!1ses!2sar!4v1600694297513!5m2!1ses!2sar" aria-hidden="false"></iframe>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default HomePages;
