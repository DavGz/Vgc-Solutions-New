import React from "react";
import Meta from "../meta.jsx";
import Test from "../../assets/img/logoteco.webp"
import Test1 from "../../assets/img/catchgame.gif"
import Test2 from "../../assets/img/Scratch&Win-gif.gif"
import Test3 from "../../assets/img/Slotmachine-GIF.webp"
import Test4 from "../../assets/img/Spinningwheel-GIF.webp"

const Card = ({ iconClass, title, text }) => (
    <div className="card card-big col-8 col-lg-3">
        <span className="icons-new"><i className={iconClass}></i></span>
        <strong className="titulo">{title}</strong>
        <p className="texto-card">{text}</p>
    </div>
);
const Cardalt = ({ imgSrc, title, text }) => (
    <a href="" className="principal-link">
        <div className="card card-promotions" style={{ width: 18 + 'rem' }}>
            <img src={imgSrc} className="card-img-top" alt={title} />
            <div className="card-body">
                
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    </a>
);
const PrincipalText = ({ title, text }) => (
    <>
        <strong className="description sub-title">{title}</strong>
        <p className="text-info-products">{text}</p>
    </>
);
function head() {
    return <>
            <Meta
                title="Gamificacion | Vgc Solution"
                description="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
                ogDescription="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
            />

            <section className="hero-products">

                    <div className="principal-text col-5">
                        <h1>Gamificacion</h1>
                        <span>Nuestra aplicación para sistemas de ERP, en colaboración con nuestros aliados de Sunmi, incorpora módulos de promociones gamificadas. Los usuarios pueden interactuar de manera dinámica con juegos como raspaditos y slots, lo que les permite experimentar la emoción de revelar premios o sorpresas ocultas en una pantalla. Esta estrategia de gamificación no solo aumenta el compromiso del consumidor, sino que también hace que la experiencia de compra sea más divertida y atractiva.</span>
                    </div>


                    <div className="image-container col-5">
                        <img src={Test} className="main-img-products hero-img" alt="" />
                    </div>
            </section>
            
            <section className="products-description">
                <div className="image-container">
                    <img src={Test} className="main-img-products" alt="" />
                </div>

                <div className="principal-text">
                    <PrincipalText title="Raspadito" text='Es un juego en el que los usuarios "raspan" una superficie virtual para revelar premios o sorpresas ocultas. Es una forma divertida y emocionante de mantener a los usuarios comprometidos y motivados' />
                    <PrincipalText title="Slots" text="Las máquinas tragamonedas virtuales permiten a los usuarios girar los rodillos para intentar obtener combinaciones ganadoras. Este tipo de juego es popular por su simplicidad y la emoción de ganar premios." />
                    <PrincipalText title="Ruleta" text="En este juego, los usuarios giran una rueda virtual para ganar premios. La ruleta es conocida por su elemento de azar y la emoción que genera al esperar el resultado." />
                    <PrincipalText title="Cupon" text="Los cupones virtuales ofrecen descuentos o promociones especiales a los usuarios. Pueden ser obtenidos a través de diversas actividades en la web, incentivando la participación y la lealtad del cliente." />
                    <PrincipalText title="Codigo QR" text="Los códigos QR pueden ser escaneados por los usuarios para acceder a promociones, descuentos o contenido exclusivo. Es una forma interactiva y moderna de conectar el mundo físico con el digital." />

                </div>
            </section>

            <section className="products-selection">
                <div className="col-10 cards-container">
                    <div className="cards-products">
                        <Cardalt imgSrc={Test1} title="Raspadito" text="Some" />
                        <Cardalt imgSrc={Test2} title="Slots" text="Some" />
                        <Cardalt imgSrc={Test3} title="Ruleta" text="Some" />
                    </div>
                </div>
                <div className="cards-products">
                        <Cardalt imgSrc={Test4} title="Cupón" text="Some" />
                        <Cardalt imgSrc={Test4} title="Codigo QR" text="Some" />
                    </div>
            </section>

            <section className="news">
                    <div>
                        <h1 className="title-favor">Puntos a Favor</h1>
                    </div>
                    <div className="containercards">
                        <Card iconClass="fas fa-globe" title="Rapidez" text="Lorem ipsum dolor sit amet consectetur." />
                        <Card iconClass="fas fa-handshake" title="Confianza" text="Lorem ipsum dolor sit amet consectetur." />
                        <Card iconClass="fas fa-ticket-alt" title="Versatilidad" text="Lorem ipsum dolor sit amet consectetur." />
                    </div>
            </section>
    </>
        
  
  }
  
  export default head
