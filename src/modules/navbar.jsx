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
                <ul class="nav nav-mobile">
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Productos</a>
                        <ul>
                            <li><a  className="subOptions" href="./indexWeb.html">Desarrollo Web</a></li>
                            <li><a className="subOptions"  href="./indexApp.html">Desarrollo de Aplicaciones</a></li>
                            <li><a className="subOptions"  href="./appGaming.html">Gamificación y Fidelizacion</a></li>
                        </ul>
                    </li>
                    <li><a href="">Servicios</a>
                        <ul>
                            <li><a className="subOptions"  href="./gestion.html">Gestion de Dominios y Correos</a></li>
                            <li><a className="subOptions"  href="./hosting.html">Hospedaje de Apps</a></li>
                            <li><a className="subOptions"  href="./design.html">Diseño y Branding</a></li>
                        </ul>
                    </li>
                    <li><a href="./casesofexit.html">Casos de Exito</a></li>
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
            </header>
        </>
    );
}

export default Navbar;
