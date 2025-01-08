import React from "react";
import Meta from "../meta.jsx";
import Test from "../../assets/img/logoteco.webp"

function head() {
    return <>
            <Meta
                title="Web Design | Vgc Solution"
                description="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
                ogDescription="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
            />

            <section className="hero-products">
                <h1>Web Design</h1>
                <p>El desarrollo web es el proceso de creación y mantenimiento de sitios web y aplicaciones web. Este campo abarca una amplia gama de actividades y habilidades, desde la codificación y el diseño hasta la gestión de bases de datos y la optimización del rendimiento, es un campo dinámico y en constante evolución, con nuevas tecnologías y tendencias emergiendo regularmente.</p>
            </section>
            
            <section className="products-description">

                <div className="principal-text">
                    <strong className="description principal-title">Diseño Web </strong>
                    <p className="text-info-products">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores error accusantium pariatur deserunt provident similique necessitatibus illo nesciunt velit! Quasi.</p>
                    <strong className="description">Productos </strong>
                    <p className="text-info-products">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores error accusantium pariatur deserunt provident similique necessitatibus illo nesciunt velit! Quasi.</p>
                    <strong className="description">Productos </strong>
                    <p className="text-info-products">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores error accusantium pariatur deserunt provident similique necessitatibus illo nesciunt velit! Quasi.</p>
                    <strong className="description">Productos </strong>
                    <p className="text-info-products">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores error accusantium pariatur deserunt provident similique necessitatibus illo nesciunt velit! Quasi.</p>
                    <strong className="description">Productos </strong>
                    <p className="text-info-products">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores error accusantium pariatur deserunt provident similique necessitatibus illo nesciunt velit! Quasi. Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                
                <div className="image-container">
                    <img src={Test} className="main-img-products" alt="" />
                </div>
            </section>

            <section  className="products-selection">
                


                <div className="product-individual">
                    <div className="principal-title">
                        <strong className="title-web">
                            NewsPaper
                        </strong>

                    </div>
                    <div className="principal-content">
                        <div className="img-container"></div>
                        <div className="content-info"></div>
                    </div>
                </div>

                <div className="product-individual">
                    <div className="principal-title">
                        <strong className="title-web">
                            Landing Pages
                        </strong>

                    </div>
                    <div className="principal-content">
                        <div className="img-container"></div>
                        <div className="content-info"></div>
                    </div>
                    
                </div>

                <div className="product-individual">
                    <div className="principal-title">
                        <strong className="title-web">
                            Posicionamiento Web
                        </strong>

                    </div>
                    <div className="principal-content">
                        <div className="img-container"></div>
                        <div className="content-info"></div>
                    </div>

                </div>


                <div className="product-individual">
                    
                    <div className="principal-title">
                        <strong className="title-web">
                            Seo Organico
                        </strong>
                    </div>
                    <div className="principal-content">
                        <div className="img-container"></div>
                        <div className="content-info"></div>
                    </div>


                </div>

            </section>

    </>
        
  
  }
  
  export default head
