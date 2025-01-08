import React, { useState } from 'react';
import Meta from "../meta.jsx";
import Test from "../../assets/img/logoteco.webp"



function head() {
    return <>
            <Meta
                title="Diseño y Branding | Vgc Solution"
                description="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
                ogDescription="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
            />


            <section className="hero-products">

                <div>
                    <div className="image-container col-5">
                        <img src={Test} className="main-img-products hero-img" alt="" />
                    </div>

                    <div className="principal-text col-5">
                        <h1>Diseño y Branding</h1>
                        <span>Nuestra aplicación para sistemas de ERP, en colaboración con nuestros aliados de Sunmi, incorpora módulos de promociones gamificadas. Los usuarios pueden interactuar de manera dinámica con juegos como raspaditos y slots, lo que les permite experimentar la emoción de revelar premios o sorpresas ocultas en una pantalla. Esta estrategia de gamificación no solo aumenta el compromiso del consumidor, sino que también hace que la experiencia de compra sea más divertida y atractiva.</span>
                    </div>

                </div>
                



            </section>
            
            <section className="products-description">
                    <div className="center-text">
                        <h2>Nuestros <span>Metodos</span> de Desarrollo</h2>
                    </div>

                    <div className="deportes-content">
                        <p className="deportes-p"><strong className="deportes-p">Te ayudamos a cumplir los objetivos haciendo lo que nos apasiona, crear para satisfacer.</strong></p>
                    </div>

                    <div className="product-div alt">
                        <div>
                            <h4>Html</h4>
                            <p className="product-description">Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <img src={Test} alt="" />
                    </div>

                    <div className="product-div alt">
                        <img src={Test} alt="" />
                        <div>
                            <h4>Javascript</h4>
                            <p className="product-description">Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>

                    <div className="product-div alt">
                        <div>
                            <h4>PhP</h4>
                            <p className="product-description">Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <img src={Test} alt="" />
                    </div>

                    <div className="product-div alt">
                        <img src={Test} alt="" />
                        <div>
                            <h4>React</h4>
                            <p className="product-description">Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                    </div>

                    <div className="product-div alt">
                        <div>
                            <h4>Css</h4>
                            <p className="product-description">Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <img src={Test} alt="" />
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
                                <div className="brandings">
                                    <div className='branding-text'>
                                        <strong className='title-brand'>Modelos de Diseño</strong>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias!</p>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div className="brandings">
                                    <div className='branding-text'>
                                        <strong className='title-brand'>Diseño de Imagenes</strong>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias!</p>
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                                <div className="brandings">
                                    <div className='branding-text'>
                                        <strong className='title-brand'>Aun por verse</strong>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias!</p>
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
    </>
        
  
  }
  
  export default head
