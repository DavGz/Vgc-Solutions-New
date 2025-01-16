import React from "react";
import Meta from "../meta.jsx";
import Test from "../../assets/img/logoteco.webp"


const DescriptionProducts = ({title, text, TextSecond }) => (
    <div className="product-div ">
        <div>
            <strong className="description principal-title">{title} </strong>
            <p className="text-info-products">{text}</p>
            <p className="text-info-products">{TextSecond}</p>

            
        </div>

    </div>
);

const ProductSelection = ({text, imgSrc, InfoContent}) => (
    <div className="product-individual">
        <div className="principal-title">
            <strong className="title-web">
                {text}
            </strong>


        </div>
        <div className="principal-content">
            <div className="img-container">
                <img src={imgSrc} alt="" />
            </div>
            <div className="content-info">
                <p className="information">{InfoContent}</p>
            </div>
        </div>
    </div>

);
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

                   <DescriptionProducts title="Desarrollo Web" text="En Vgc Solution, nos especializamos en el desarrollo web, creando y manteniendo sitios web y aplicaciones web que destacan por su funcionalidad y diseño. Nuestro equipo de expertos utiliza las últimas tecnologías y tendencias para ofrecer soluciones web que no solo cumplen con tus expectativas, sino que las superan." TextSecond="Desde la planificación inicial y el diseño de la interfaz de usuario hasta la codificación, pruebas y lanzamiento del producto final, nos aseguramos de que cada proyecto sea un éxito. Nos enfocamos en la optimización del rendimiento y la gestión de bases de datos para garantizar que tu sitio web funcione de manera eficiente y sin problemas."></DescriptionProducts>



                </div>
                
                <div className="image-container">
                    <img src={Test} className="main-img-products" alt="" />
                </div>
            </section>

            <section  className="products-selection">

                <ProductSelection text="Landing Pages" InfoContent="Diseñamos Landing Pages optimizadas para captar la atención de tus usuarios y dirigirlos hacia una acción específica, como completar un formulario o realizar una compra. Nuestras Landing Pages están diseñadas para maximizar la conversión y medir la efectividad de tus campañas de marketing digital. ¡Haz que cada visita cuente con nuestras Landing Pages!"></ProductSelection>

                <ProductSelection text="Posicionamiento Web" InfoContent="¡Aumenta tu visibilidad en línea con nuestro servicio de Posicionamiento Web! En Vgc Solution, utilizamos técnicas avanzadas de SEO para mejorar el ranking de tu sitio web en los motores de búsqueda. Desde la optimización de palabras clave hasta la creación de contenido relevante, nos aseguramos de que tu sitio web atraiga más tráfico orgánico y se destaque entre la competencia. ¡Lleva tu presencia en línea al siguiente nivel con nuestro Posicionamiento Web!"></ProductSelection>

                <ProductSelection text="Seo Organico" InfoContent=": ¡Impulsa tu sitio web de manera natural con nuestro SEO Orgánico! En Vgc Solution, nos especializamos en prácticas de optimización que mejoran la visibilidad de tu sitio web sin recurrir a publicidad pagada. Creamos contenido de alta calidad, optimizamos palabras clave y mejoramos la estructura de tu sitio para aumentar el tráfico y la autoridad de tu página de manera sostenible. ¡Confía en nuestro SEO Orgánico para un crecimiento a largo plazo!"></ProductSelection>

                <ProductSelection text="NewsPaper" InfoContent="¡Mantén a tus lectores informados y comprometidos con nuestro servicio de Newspaper! En Vgc Solution, ofrecemos soluciones de publicación digital que proporcionan noticias, artículos y contenido informativo de alta calidad. Utilizamos técnicas de SEO y marketing de contenido para atraer y retener a tus lectores, asegurando una experiencia de lectura atractiva y accesible. ¡Haz que tu periódico digital sea el referente en información con nuestro servicio de Newspaper!"></ProductSelection>


            </section>

    </>
        
  
  }
  
  export default head
