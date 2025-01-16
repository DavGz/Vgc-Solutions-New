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
                    <h1>Gestion de Dominios y Correos Empresariales</h1>
                    <span>En Vgc Solution, ofrecemos servicios integrales de gestión de dominios y correos empresariales para asegurar que tu empresa mantenga una presencia en línea profesional y eficiente. Nuestra gestión de dominios incluye el registro, renovación y administración de tus dominios, garantizando que estén siempre activos y protegidos. Además, proporcionamos servicios de correos empresariales que permiten a tu equipo comunicarse de manera segura y profesional, utilizando direcciones de correo personalizadas con tu dominio.</span>
                </div>
            </section>
            
            <section className="products-description">
                <div className="image-container">
                    <img src={Test} className="main-img-products" alt="" />
                </div>

                <div className="principal-text">
                        <h1>Gestion de Dominios</h1>
                        <p>En Vgc Solution, ofrecemos servicios integrales de gestión de dominios para asegurar que tu empresa mantenga una presencia en línea profesional y eficiente. Nuestra gestión de dominios incluye el registro, renovación y administración de tus dominios, garantizando que estén siempre activos y protegidos. Con nuestra infraestructura robusta y soporte técnico dedicado, nos aseguramos de que tus dominios funcionen sin interrupciones, mejorando la eficiencia y la imagen profesional de tu empresa.</p>
                </div>
            </section>


            <section className="products-description">

                <div className="principal-text">
                        <h1>Correos Empresariales </h1>
                        <p>En Vgc Solution, proporcionamos servicios de correos empresariales que permiten a tu equipo comunicarse de manera segura y profesional, utilizando direcciones de correo personalizadas con tu dominio. Nuestro servicio de correos empresariales incluye soporte técnico dedicado para resolver cualquier problema que puedas enfrentar, ayudándote en la configuración y mantenimiento de tus correos electrónicos. Nos enorgullecemos de proporcionar una atención al cliente excepcional, asegurando que todas tus consultas sean respondidas de manera rápida y eficiente.</p>
                </div>
 
                <div className="image-container">
                    <img src={Test} className="main-img-products" alt="" />
                </div>

            </section>


    </>
        
  
  }
  
  export default head
