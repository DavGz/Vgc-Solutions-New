import React from "react";
import Logo from "../assets/img/logo3.webp";


function Navbar() {
    return (
        <>
            <header>
                <a href="#" className="logo" style={{ marginTop: '8px' }}>
                    <img className="logo-nav" src={Logo} alt="Logo" />
                </a>
                <div className="bx bx-menu" id="menu-icon"></div>
                <ul className="navlist">
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="#about">Servicios</a></li>
                    <li><a href="#services">Casos de Exito</a></li>
                    <li><a href="#products">Desarrollo</a></li>
                    <li><a href="#products">Industria</a></li>

                    <li className="contact-cell"><a href="#contacts">Contáctanos</a></li>
                </ul>
                <div className="top-btn">
                    <a className="h-btn" href="#contacts">Contáctanos</a>
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bx bx-menu" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    </button>
                    <ul className="dropdown-menu menu-drop" >
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Productos</a></li>
                        <li><a href="#about">Servicios</a></li>
                        <li><a href="#services">Casos de Exito</a></li>
                        <li><a href="#deportesline">Desarrollo</a></li>
                        <li><a href="#products">Industria</a></li>
                        <li className="contact-cell"><a href="#contacts">Contáctanos</a></li>
                    </ul>
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
            </header>
        </>
    );
}

export default Navbar;
