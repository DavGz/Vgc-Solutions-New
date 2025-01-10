import React from "react";
import Meta from "../meta.jsx";
import Test from "../../assets/img/logoteco.webp"

function head() {
    return <>
            <Meta
                title="Gestion de Dominios y Correos | Vgc Solution"
                description="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
                ogDescription="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
            />
            <section className="hero-products">
                    <div className="image-container col-5">
                        <img src={Test} className="main-img-products hero-img" alt="" />
                    </div>

                    <div className="principal-text col-5">
                        <h1>Gestion de Dominios y Correos</h1>
                        <span>Nuestra aplicación para sistemas de ERP, en colaboración con nuestros aliados de Sunmi, incorpora módulos de promociones gamificadas. Los usuarios pueden interactuar de manera dinámica con juegos como raspaditos y slots, lo que les permite experimentar la emoción de revelar premios o sorpresas ocultas en una pantalla. Esta estrategia de gamificación no solo aumenta el compromiso del consumidor, sino que también hace que la experiencia de compra sea más divertida y atractiva.</span>
                    </div>
            </section>
            
            <section className="products-description">
                <div className="image-container">
                    <img src={Test} className="main-img-products" alt="" />
                </div>

                <div className="principal-text">
                        <h1>Gestion de Dominios</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </section>


            <section className="products-description">

                <div className="principal-text">
                        <h1>Correos Empresariales </h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div className="image-container">
                    <img src={Test} className="main-img-products" alt="" />
                </div>

            </section>


    </>
        
  
  }
  
  export default head
