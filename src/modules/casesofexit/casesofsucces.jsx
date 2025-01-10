import React from "react";
import Meta from "../meta.jsx";
import Test from "../../assets/img/logoteco.webp";

function head() {
    const Cardalt = ({ imgSrc, title, text }) => (
        <div className="card card-alt" >
            <img src={imgSrc} className="card-img-top card-img-alt" alt="..."></img>
            <div className="card-body">
                <strong>{title}</strong>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
    return (
        <>
            <Meta
                title="Casos de Exito | Vgc Solution"
                description="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
                ogDescription="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
            />

            <section className="hero-products">
                <h1>Casos de Exito</h1>
                <p>El desarrollo web es el proceso de creación y mantenimiento de sitios web y aplicaciones web. Este campo abarca una amplia gama de actividades y habilidades, desde la codificación y el diseño hasta la gestión de bases de datos y la optimización del rendimiento, es un campo dinámico y en constante evolución, con nuevas tecnologías y tendencias emergiendo regularmente.</p>
            </section>

            <section className="products-selection">
                <div className="principal-text alt1">
                    <h2 className="titulo-app">Titulo</h2>
                    <p className="principal-app-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore aliquam minima magnam ea quo accusamus, sapiente autem animi blanditiis delectus repudiandae dolorum quis? Saepe autem incidunt, doloribus rerum illo eligendi accusantium consequuntur! Blanditiis voluptates neque ea itaque illum fuga facilis, dicta reprehenderit vero, accusamus veniam eos voluptas mollitia dignissimos!
                    </p>
                </div>

                <div className="productos-suceso">
                    <div className="successproducts col-5 pr-1">
                        {
                         <Cardalt imgSrc={Test} title="Texto Aqui" text="Texto Aqui"></Cardalt>
                        }
                    </div>

                    <div className="successproducts col-5 pr-2">
                        {
                            <Cardalt imgSrc={Test} title="Texto Aqui" text="Texto Aqui"></Cardalt>
                        }
                    </div>

                    <div className="successproducts col-5 pr-1">
                        {
                            <Cardalt imgSrc={Test} title="Texto Aqui" text="Texto Aqui"></Cardalt>
                        }
                    </div>
                    <div className="successproducts col-5 pr-2">
                        {
                            <Cardalt imgSrc={Test} title="Texto Aqui" text="Texto Aqui"></Cardalt>
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default head;