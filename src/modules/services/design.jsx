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
                        <span>Desarrollo y branding son dos pilares fundamentales para el éxito de cualquier empresa. El desarrollo se refiere al proceso de creación y mejora de productos, servicios o sistemas. En el ámbito tecnológico, esto incluye el diseño, la programación y la implementación de aplicaciones web, móviles y software. Este proceso abarca desde la planificación inicial y el diseño de la interfaz de usuario hasta la codificación, pruebas y lanzamiento del producto final. El objetivo del desarrollo es crear soluciones eficientes, funcionales y atractivas que satisfagan las necesidades de los usuarios.</span>
                    </div>

            </section>
            
            <section className="products-design">
                <div className="productos-titulo">
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
                            <h2 className='title-brand'>Branding</h2>
                        </div>
                    </div>

                    <div className="branding">
                        <div className='branding-corpse'>
                            <div className='brading-types'>

                               <TypesOfBrandings  title="Modelos de Diseño" text="Los modelos de diseño son enfoques estructurados que guían el proceso de creación de productos visuales y funcionales. Estos modelos incluyen principios y metodologías que ayudan a diseñadores a planificar, desarrollar y evaluar sus proyectos." ></TypesOfBrandings>
                                
                               <TypesOfBrandings  title="Diseño de Imagenes" text="El diseño de imágenes es el proceso de crear y manipular gráficos visuales para comunicar un mensaje o una idea de manera efectiva. Los diseñadores de imágenes utilizan herramientas de software como Adobe Photoshop, Illustrator y otros programas de diseño gráfico para crear logotipos, infografías y otros tipos de contenido visual." ></TypesOfBrandings>

                               <TypesOfBrandings  title="Personalidad Para tu Marca" text="ahora de personalidad para tu marca
La personalidad de tu marca es la combinación de características humanas que se asocian con tu marca. Esta personalidad se refleja en la forma en que la marca se comunica, se comporta y se presenta ante su audiencia. Una personalidad de marca bien definida ayuda a diferenciar tu marca de la competencia y a crear una conexión emocional con los consumidores." ></TypesOfBrandings>

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
 