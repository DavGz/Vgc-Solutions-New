import React from "react";
import Meta from "../meta.jsx";
import Test from "../../assets/img/logoteco.webp"


const DescriptionProducts = ({title, text }) => (
    <div className="product-div ">
        <div>
            <strong className="description principal-title">{title} </strong>
            <p className="text-info-products">{text}</p>
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

                   <DescriptionProducts title="Productos" text="Texto Inferior"></DescriptionProducts>

                   <DescriptionProducts title="Productos" text="Texto Inferior"></DescriptionProducts>

                   <DescriptionProducts title="Productos" text="Texto Inferior"></DescriptionProducts>

                   <DescriptionProducts title="Productos" text="Texto Inferior"></DescriptionProducts>

                   <DescriptionProducts title="Productos" text="Texto Inferior"></DescriptionProducts>

                </div>
                
                <div className="image-container">
                    <img src={Test} className="main-img-products" alt="" />
                </div>
            </section>

            <section  className="products-selection">

                <ProductSelection text="Landing Pages" InfoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta quia saepe vitae beatae magni exercitationem! Voluptatem recusandae facere ex est dolores, cumque, deserunt quasi obcaecati ad, temporibus mollitia numquam facilis quisquam. Sit ea suscipit laboriosam, quo ipsum saepe debitis!"></ProductSelection>

                <ProductSelection text="Posicionamiento Web" InfoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta quia saepe vitae beatae magni exercitationem! Voluptatem recusandae facere ex est dolores, cumque, deserunt quasi obcaecati ad, temporibus mollitia numquam facilis quisquam. Sit ea suscipit laboriosam, quo ipsum saepe debitis!"></ProductSelection>

                <ProductSelection text="Seo Organico" InfoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta quia saepe vitae beatae magni exercitationem! Voluptatem recusandae facere ex est dolores, cumque, deserunt quasi obcaecati ad, temporibus mollitia numquam facilis quisquam. Sit ea suscipit laboriosam, quo ipsum saepe debitis!"></ProductSelection>

                <ProductSelection text="NewsPaper" InfoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta quia saepe vitae beatae magni exercitationem! Voluptatem recusandae facere ex est dolores, cumque, deserunt quasi obcaecati ad, temporibus mollitia numquam facilis quisquam. Sit ea suscipit laboriosam, quo ipsum saepe debitis!"></ProductSelection>


            </section>

    </>
        
  
  }
  
  export default head
