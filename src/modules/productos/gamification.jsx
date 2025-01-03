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
                        <h1>Texto Principal</h1>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quo omnis veniam reprehenderit, dolores molestiae deserunt fuga ullam fugit doloribus maxime illum maiores harum necessitatibus numquam reiciendis aspernatur minus recusandae esse tempore vero velit aperiam. Corporis unde quasi fugit quibusdam.</span>
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
                    <PrincipalText title="Productos" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores error accusantium pariatur deserunt provident similique necessitatibus illo nesciunt velit! Quasi." />
                    <PrincipalText title="Productos" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores error accusantium pariatur deserunt provident similique necessitatibus illo nesciunt velit! Quasi." />
                    <PrincipalText title="Productos" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores error accusantium pariatur deserunt provident similique necessitatibus illo nesciunt velit! Quasi." />
                    <PrincipalText title="Productos" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores error accusantium pariatur deserunt provident similique necessitatibus illo nesciunt velit! Quasi." />
                    <PrincipalText title="Productos" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores error accusantium pariatur deserunt provident similique necessitatibus illo nesciunt velit! Quasi." />

                </div>
            </section>

            <section className="products-selection">
                <div className="col-10 cards-container">
                    <div className="cards-products">
                        <Cardalt imgSrc={Test1} title="Card title" text="Some" />
                        <Cardalt imgSrc={Test2} title="Card title" text="Some" />
                        <Cardalt imgSrc={Test3} title="Card title" text="Some" />
                        <Cardalt imgSrc={Test4} title="Card title" text="Some" />
                    </div>
                </div>
            </section>

            <section className="news">
                    <div>
                        <h1 className="title-favor">Puntos a Favor</h1>
                    </div>
                    <div className="containercards">
                        <Card iconClass="fas fa-globe" title="Lorem, ipsum." text="Lorem ipsum dolor sit amet consectetur." />
                        <Card iconClass="fas fa-handshake" title="Lorem, ipsum." text="Lorem ipsum dolor sit amet consectetur." />
                        <Card iconClass="fas fa-ticket-alt" title="Lorem, ipsum." text="Lorem ipsum dolor sit amet consectetur." />
                    </div>
            </section>
    </>
        
  
  }
  
  export default head
