import React, { useState } from "react";
import Logo from "../assets/img/logo3.webp";
import LogoMobile from "../assets/img/logoteco.webp";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProducts = () => {
        setIsProductsOpen(!isProductsOpen);
    };

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    return (
        <>
            <header>
                <a href="#" className="logo" style={{ marginTop: '8px' }}>
                    <img className="logo-nav logo-desktop" src={Logo} alt="Logo" />
                    <img className="logo-nav logo-mobile" src={LogoMobile} alt="Logo" />

                </a>
                <div className="bx bx-menu" id="menu-icon"></div>
                <ul className="nav nav-mobile">
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Productos</a>
                        <ul>
                            <li><a className="subOptions" href="./indexWeb.html">Desarrollo Web</a></li>
                            <li><a className="subOptions" href="./indexApp.html">Desarrollo de Aplicaciones</a></li>
                            <li><a className="subOptions" href="./appGaming.html">Gamificación y Fidelización</a></li>
                        </ul>
                    </li>
                    <li><a href="">Servicios</a>
                        <ul>
                            <li><a className="subOptions" href="./gestion.html">Gestión de Dominios y Correos</a></li>
                            <li><a className="subOptions" href="./hosting.html">Hospedaje de Apps</a></li>
                            <li><a className="subOptions" href="./design.html">Diseño y Branding</a></li>
                        </ul>
                    </li>
                    <li><a href="./casesofexit.html">Casos de Éxito</a></li>
                </ul>

                <div className="top-btn">
                    <a className="h-btn" href="#contacts">Contáctanos</a>
                </div>

                <div className="dropdown idiomas">
                    <button className="btn btn-secondary dropdown-toggle idiomas" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="/assets/img/es.svg" style={{ width: '2rem' }} alt="ES" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <a className="dropdown-item" href="/eng.html">
                            <img src="assets/img/en.webp" style={{ width: '2rem' }} alt="EN" />
                        </a>
                        <a className="dropdown-item" href="/brz.html">
                            <img src="assets/img/brazil.png" style={{ width: '2rem' }} alt="BR" />
                        </a>
                    </ul>
                </div>

                <div className="Navbar-mini">
                    <a className="btn btn-barss" onClick={toggleMenu}><i className="fas fa-bars"></i></a>
                    <div className={`drop ${isMenuOpen ? 'show' : ''}`}>
                        <ul className="mini-menubody">
                            <li><a href="./">Inicio</a></li>
                            <li>
                                <a href="#" onClick={toggleProducts}>Productos</a>
                                <ul className={`sub-options ${isProductsOpen ? 'show' : ''}`} id="products-id">
                                    <li><a className="optionsMobile" href="./indexWeb.html"> <i className="fas fa-dot-circle point-sub"></i>Desarrollo Web</a></li>
                                    <li><a className="optionsMobile" href="./appGaming.html"> <i className="fas fa-dot-circle point-sub"></i>Gamificación</a></li>
                                    <li><a className="optionsMobile" href="./indexApp.html"> <i className="fas fa-dot-circle point-sub"></i>Desarrollo de Apps </a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" onClick={toggleServices}>Servicios</a>
                                <ul className={`sub-options ${isServicesOpen ? 'show' : ''}`} id="services-sub">
                                    <li><a className="optionsMobile" href="./gestion.html"> <i className="fas fa-dot-circle point-sub"></i>Gestión de Dominios</a></li>
                                    <li><a className="optionsMobile" href="./hosting.html"> <i className="fas fa-dot-circle point-sub"></i>Hospedaje de Apps</a></li>
                                    <li><a className="optionsMobile" href="./design.html"> <i className="fas fa-dot-circle point-sub"></i>Diseño y Branding</a></li>
                                </ul>
                            </li>
                            <li><a href="./casesofexit.html">Casos de Éxito</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
