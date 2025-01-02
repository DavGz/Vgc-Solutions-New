import React from "react";
import { initReactI18next } from "react-i18next";
import Meta from "./meta.jsx";

function infohome() {
    return <>
            <Meta
                title="Vgc Solution"
                description="Veneto Games Corp, Panamá, Inversiones Oristano, C.A. Venezuela.Somos VGC Desarrollos WEB, Empresa especializada en proveer servicios de B2B para la industria iGaming, desarrollo de software, juegos de Loterías, Rifas, Apuestas deportivas, Lottos, Carreras Hípicas, Juegos Virtuales, SEO, mas de 15 años de experiencia en operaciones de Bingos, salas de juegos y casino. Creamos aplicaciones adaptadas para ti y te acompañamos en todo el proceso operativo. VGC tu solución tecnológica."
                ogDescription="Veneto Games Corp, Panamá, Inversiones Oristano, C.A. Venezuela.Somos VGC Desarrollos WEB, Empresa especializada en proveer servicios de B2B para la industria iGaming, desarrollo de software, juegos de Loterías, Rifas, Apuestas deportivas, Lottos, Carreras Hípicas, Juegos Virtuales, SEO, mas de 15 años de experiencia en operaciones de Bingos, salas de juegos y casino. Creamos aplicaciones adaptadas para ti y te acompañamos en todo el proceso operativo. VGC tu solución tecnológica."
            />
        <div className="firefly"></div>

            <section className="hero" id="home">
                <div className="main-content">
                    <h4>Somos <span className="veneto">Veneto Games</span> <span className="corp">Corp</span>  , creamos soluciones tecnológicas para mercados B2B.</h4>
                    <p>Nos dedicamos a desarrollar, proveer y operar soluciones tecnológicas B2B que permitan a nuestros aliados comerciales acceder a nuevos mercados, facilitando así los procesos que ayuden a expandir el alcance de clientes potenciales de manera efectiva.</p>
                    <p>Nuestro Propósito es crear aplicaciones robustas, pero con interfaz y experiencia amigable, adaptada a cada requerimiento y necesidad de acuerdo al publico objetivo.</p>
                    <div className="social"><a href=""><i className="fab fa-linkedin"></i></a><a href=""><i className="fab fa-twitter"></i></a><a href=""><i className="fab fa-facebook-square"></i></a><a href=""><i className="fab fa-instagram"></i></a><a href=""></a></div>
                </div>
                <div className="main-content logo-main" ><img src="assets/img/logoteco.webp"></img></div>
            </section>
    </>
        
  
  }
  
  export default infohome
