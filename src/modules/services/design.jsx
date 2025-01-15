import React, { useState } from 'react';
import Meta from "../meta.jsx";
import Test from "../../assets/img/logoteco.webp"
import Js from "../../assets/img/js.png"
import Html from "../../assets/img/html.png"
import Php from "../../assets/img/php.png"
import Css from "../../assets/img/css.png"
import ReactIcon from "../../assets/img/react.png"

const Textproduct = ({ imgSrc,imgClass, title, text }) => (
    <div className="product-div alt">
        <img src={imgSrc} className={imgClass} alt="" />
        <div>
            <h4 className='info-designs'>{title}</h4>
        </div>
    </div>
);



const TypesOfBrandings = ({title, text }) => (
    <div className="brandings">
        <div className='branding-text'>
            <strong className='title-brand'>{title}</strong>
            <p className="parrafo-brandings">{text}</p>
        </div>
    <div>

    </div>
</div>
);

function head() {
    return <>
            <Meta
                title="Diseño y Branding | Vgc Solution"
                description="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
                ogDescription="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
            />


            <section className="hero-products">

                    <div className="image-container col-5">
                        <img src={Test} className="main-img-products hero-img" alt="" />
                    </div>

                    <div className="principal-text col-5">
                        <h1>Diseño y Branding</h1>
                        <span>Nuestra aplicación para sistemas de ERP, en colaboración con nuestros aliados de Sunmi, incorpora módulos de promociones gamificadas. Los usuarios pueden interactuar de manera dinámica con juegos como raspaditos y slots, lo que les permite experimentar la emoción de revelar premios o sorpresas ocultas en una pantalla. Esta estrategia de gamificación no solo aumenta el compromiso del consumidor, sino que también hace que la experiencia de compra sea más divertida y atractiva.</span>
                    </div>

            </section>
            
            <section className="products-design">
                <div>
                    <div className="center-text">
                        <h2>Nuestros <span>Metodos</span> de Desarrollo</h2>
                    </div>

                    <div className="deportes-content">
                        <p className="deportes-p"><strong className="deportes-p">Te ayudamos a cumplir los objetivos haciendo lo que nos apasiona, crear para satisfacer.</strong></p>
                    </div>

                </div>

                <div className="products-design-alt">

                    <Textproduct imgSrc={Html} imgClass="html-img" title="Html" />
                    
                    <Textproduct imgSrc={Js} imgClass="js-img" title="JavaScript" />

                    <Textproduct imgSrc={Php} imgClass="php-img" title="PHP" />

                    <Textproduct imgSrc={ReactIcon} imgClass="react-img" title="React"/>

                    <Textproduct imgSrc={Css} imgClass="css-img" title="CSS"/>

                </div>
                                                 

            </section>


            <section className="designs">
                    <div className="design">
                        <div className="title-design">
                            <strong className='title-brand'>Branding</strong>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias!</p>
                        </div>
                    </div>

                    <div className="branding">
                        <div className='branding-corpse'>
                            <div className='brading-types'>

                               <TypesOfBrandings  title="Modelos de Diseño" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias!" ></TypesOfBrandings>
                                
                               <TypesOfBrandings  title="Diseño de Imagenes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias!" ></TypesOfBrandings>

                               <TypesOfBrandings  title="Personalidad Para tu Marca" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias!" ></TypesOfBrandings>

                            </div>
                            <div className="image-container col-5">
                                <img src={Test} className="main-img-products hero-img" alt="" />
                            </div>

                        </div>
                    </div>
            </section>
    </>
        
  
  }
  
  export default head
 