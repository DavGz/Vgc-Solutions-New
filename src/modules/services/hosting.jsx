import React from "react";
import Meta from "../meta.jsx";
import Test from "../../assets/img/logoteco.webp"

function head() {
    return <>
            <Meta
                title="Hosting de Apps | Vgc Solution"
                description="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
                ogDescription="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
            />

            <section className="hero-products">
                    <div className="principal-text col-5">
                        <h1>Hosting de Aplicaciones</h1>
                        <span>
En Vgc Solution, nos especializamos en ofrecer servicios de hosting de aplicaciones de alta calidad para asegurar que tus aplicaciones y sitios web estén siempre operativos y accesibles. Con nuestra infraestructura robusta y múltiples servidores, garantizamos un tiempo de actividad óptimo y una experiencia continua para tus usuarios.

Nuestro servicio de hosting incluye soporte técnico dedicado para resolver cualquier problema que puedas enfrentar, ayudándote en la configuración y mantenimiento de tus aplicaciones. Nos enorgullecemos de proporcionar una atención al cliente excepcional, asegurando que todas tus consultas sean respondidas de manera rápida y eficiente.</span>
                    </div>

                    <div className="image-container col-5">
                        <img src={Test} className="main-img-products hero-img" alt="" />
                    </div>
            </section>
            
            <section className="products-description principal-text">
                <div className="image-container">
                    <img src={Test} className="main-img-products" alt="" />
                </div>

                <div className="principal-text">
                    <div>
                        <h1>Hosting para Aplicaciones</h1>
                        
                        <p>
                            En Vgc Solution, ofrecemos servicios de hosting de aplicaciones diseñados para garantizar que tus aplicaciones y sitios web estén siempre disponibles y funcionando sin problemas. Nuestra infraestructura avanzada y múltiples servidores aseguran un tiempo de actividad óptimo, minimizando cualquier interrupción y proporcionando una experiencia continua para tus usuarios.</p>
                    </div>
                </div>
            </section>


            <section className="hostingservices">
                <div className="hosting-individual">
                    <div className="principal-title">
                        <strong className="title-web">
                            Contamos con multiples servidores
                        </strong>

                    </div>
                    <div className="principal-content">
                        <div className="content-info">
                            <span>La disponibilidad de servidores y servicios de hosting asegura que las aplicaciones y sitios web estén operativos y accesibles en todo momento, minimizando el tiempo de inactividad y garantizando una experiencia continua para los usuarios. La atención al cliente proporciona soporte y asistencia técnica, resolviendo problemas, ayudando en la configuración y mantenimiento, y respondiendo a consultas. Un buen servicio de atención al cliente es esencial para mantener la satisfacción y la confianza de los usuarios.</span>
                        </div>
                    </div>
                </div>
            </section>
    </>
  
  }
  
  export default head
