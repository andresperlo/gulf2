import React from 'react'

import logo from '../img/logo.png'

function Footer() {
    return (
        <div>
            <footer className='text-white footer-css'>
                <div className='ml5-css'>
                    <img src={logo} className='img-logo' alt="" />
                </div>
                <div className='text-center'>
                    <div className='border-laDiag mt-2 p-3'>
                        <h2 className='diagonalCss'>La Diagonal</h2>
                        <h2 className='pb-2 diagEstacionServ'>Estacion de Servicio</h2>
                        <h4 className='GLLCss'>GNC - LIQUIDOS - LUBRICANTES</h4>
                    </div>
                    <h2 className='subtitulos-footer pt-3'><i className="fas fa-map-marker-alt pb-3 css-h2 icon-avsiria"></i> Av. Siria 1968</h2>
                    <div className='d-flex justify-content-center'>
                        <h2><a href="tel: 3816036303"><i className="fas fa-phone-volume pb-3 icon-css"></i></a></h2>
                        <h2 className='css-h2 subtitulos-footer mx-3'>381 603 6303</h2>
                        <h2><a href="https://bit.ly/33VDeQH" target='_blank'><i className="fab fa-whatsapp icon-css"></i></a></h2>
                    </div>
                    <h2 className='tucuman-css subtitulos-footer pb-3'>San Miguel de Tucuman</h2>
                    <h2 className='tucuman-css titulos'>TUCUMAN - ARGENTINA</h2>
                </div>
                <div className='mr5-css text-center'>
                    <h4 className='pb-3 subtitulos-footer AvSiriaCss'>Haz cick para ver como llegar</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d292.7244576122078!2d-65.20442587848555!3d-26.803253375792462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c324224fc93%3A0xcfd53fbd8b316e29!2sLa%20Diagonal%20GNC!5e0!3m2!1ses!2sar!4v1600694297513!5m2!1ses!2sar" aria-hidden="false"></iframe>
                </div>
            </footer>
        </div>
    )
}

export default Footer;