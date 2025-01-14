import React from "react";
import Meta from "../meta.jsx";
import Test from "../../assets/img/logoteco.webp"

const CardApp = ({ imgSrc, title, text }) => (
    <div className="product-div alt">
        <img src={imgSrc} alt="Img-Products" />
        <div>
            <h4>{title}</h4>
            <p className="product-description">{text}</p>
        </div>
    </div>
);

const CardAppAlt = ({ imgSrc, title, text }) => (
    <div className="product-div alt">
        
        <div>
            <h4>{title}</h4>
            <p className="product-description">{text}</p>
        </div>
        <img src={imgSrc} alt="Img-Products" />
    </div>
);


function head() {
    return <>
            <Meta
                title="App Design | Vgc Solution"
                description="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
                ogDescription="Diseño de Aplicaciones a la palma de tu mano, nos adaptamos a ti"
            />

            <section className="hero-products app-products">
                <h1>App Design</h1>
                <p>Productos Description</p>

            </section>
             
            <section className="products-description-app">

                <div className="principal-text alt1">
                    
                    <h2 className="titulo-app">Desarrollo de Aplicaciones</h2>
                    <p className="principal-app-description">
                        El desarrollo de aplicaciones es un proceso integral que combina el Desarrollo Front-end y Back-end, junto con la creación de Aplicaciones Web y Móviles, y el diseño de Interfaz UX y UI. Este enfoque holístico asegura que las aplicaciones no solo sean visualmente atractivas y fáciles de usar, sino también funcionales y eficientes en su funcionamiento interno. El Front-end se encarga de la parte visual e interactiva, mientras que el Back-end maneja la lógica del servidor y la gestión de datos. Las Aplicaciones Web y Móviles permiten a los usuarios acceder a las funcionalidades desde diferentes dispositivos, y el diseño de Interfaz UX y UI garantiza una experiencia de usuario satisfactoria y una presentación visual atractiva.
                    </p>
                </div>

                <div className="charts-explication">
                    <div className="card-instructions">
                        <div className="card instrucciones">
                            <img src="" alt="" />
                            <strong>Back-End & Front-End</strong>
                            <span className="text-info-alt">El desarrollo Front-end y Back-end son dos caras de la misma moneda en el desarrollo de aplicaciones y sitios web.El Front-end se encarga de la parte visual mientras que el Back-end se ocupa de la lógica del servidor y sistemas</span>
                        </div>
                    </div>

                    <div className="card-instructions">
                        <div className="card instrucciones">
                            <img src="" alt="" />
                            <strong>Aplicaciones Web</strong>
                            <span className="text-info-alt">Aplicaciones que pueden ser tan simples como una página de información o tan complejas como una plataforma de comercio electrónico.</span>
                        </div>
                    </div>

                    <div className="card-instructions">
                        <div className="card instrucciones">
                            <img src="" alt="" />
                            <strong>Aplicaciones Moviles</strong>
                            <span className="text-info-alt">Son programas diseñados específicamente para dispositivos móviles como smartphones y tablets. Pueden ser nativas o hibridas.</span>
                        </div>
                    </div>

                    <div className="card-instructions">
                            <div className="card instrucciones">
                                <img src="" alt="" />
                                <strong>Interfaz UX & UI</strong>
                                <span className="text-info-alt">La Interfaz UX se centra en mejorar la satisfacción del usuario mediante la accesibilidad y placer en la interacción con el producto, mientras que la Interfaz UI se enfoca en el diseño visual y la presentación del producto.</span>
                            </div> 
                    </div>

                </div>
            </section>

            <section  className="products-selection ">

                <CardApp imgSrc={Test}  title="Slots" text="Las aplicaciones web de slots permiten a los usuarios disfrutar de juegos de tragamonedas en línea desde cualquier dispositivo con acceso a internet. Estas aplicaciones combinan el desarrollo visual y de interacción del Front-end con la lógica del servidor y la gestión de datos del Back-end. La interfaz visual, diseñada con principios de UX y UI, asegura que los usuarios puedan navegar y jugar de manera intuitiva y atractiva. Mientras tanto, el Back-end garantiza que los juegos funcionen sin problemas y que las transacciones sean seguras, proporcionando una experiencia de usuario fluida y confiable."></CardApp>

                <CardAppAlt imgSrc={Test}  title="Raspadito" text="Las aplicaciones web de Raspadito ofrecen a los usuarios la emoción de los juegos de lotería instantánea en línea. Estas aplicaciones combinan el desarrollo visual e interactivo del Front-end con la lógica del servidor y la gestión de datos del Back-end. La interfaz visual, diseñada con principios de UX y UI, permite a los usuarios raspar virtualmente sus boletos de manera intuitiva y atractiva. Mientras tanto, el Back-end asegura que los resultados sean generados de manera justa y segura-"></CardAppAlt>

                <CardApp imgSrc={Test}  title="Marca Blanca" text="La Marca Blanca permite a las empresas lanzar su propia plataforma de apuestas sin tener que desarrollar la tecnología desde cero. Estas soluciones son proporcionadas por empresas especializadas que ofrecen plataformas de apuestas completamente funcionales y personalizables. La empresa que adquiere la solución de marca blanca puede personalizar el diseño, la interfaz y la marca, pero la infraestructura subyacente es gestionada por el proveedor, Esto permite a las empresas entrar rápidamente en el mercado de apuestas en línea, ya que el proveedor se encarga de aspectos técnicos como la gestión de riesgos, la seguridad, las transacciones y el cumplimiento de las regulaciones"></CardApp>

                <CardAppAlt imgSrc={Test}  title="Apuestas Deportivas" text="Las aplicaciones web de apuestas deportivas permiten a los usuarios realizar apuestas en eventos deportivos en tiempo real desde cualquier dispositivo con acceso a internet. Estas plataformas combinan el desarrollo visual e interactivo del Front-end con la lógica del servidor y la gestión de datos del Back-end. La interfaz visual, diseñada con principios de UX y UI, asegura que los usuarios puedan navegar y realizar apuestas de manera intuitiva y atractiva. El Back-end maneja la gestión de cuotas, el procesamiento de apuestas y la seguridad de las transacciones, garantizando una experiencia de usuario fluida y confiable. Además, estas aplicaciones suelen ofrecer estadísticas en vivo, actualizaciones de eventos y diversas opciones de apuestas para mejorar la experiencia del usuario."></CardAppAlt>

                <CardApp imgSrc={Test}  title="Ruleta de Animalitos" text="Las aplicaciones web de ruleta de animalitos permiten a los usuarios participar en juegos de azar temáticos con animales desde cualquier dispositivo con acceso a internet. Estas plataformas combinan el desarrollo visual e interactivo del Front-end con la lógica del servidor y la gestión de datos del Back-end. La interfaz visual, diseñada con principios de UX y UI, asegura que los usuarios puedan seleccionar y apostar en diferentes animales de manera intuitiva y atractiva. El Back-end maneja la generación de resultados, el procesamiento de apuestas y la seguridad de las transacciones, garantizando una experiencia de usuario fluida y confiable. Además, estas aplicaciones suelen ofrecer gráficos coloridos y animaciones para mejorar la experiencia del usuario."></CardApp>

                <CardAppAlt imgSrc={Test}  title="Triples y Signos" text="Las aplicaciones web de apuestas de triples numéricos y signos zodiacales permiten a los usuarios combinar la emoción de los números con la mística de los signos del zodiaco. Estas plataformas ofrecen una interfaz visual atractiva y fácil de usar, diseñada con principios de UX y UI, donde los usuarios pueden seleccionar sus combinaciones favoritas de números y signos. En el Back-end, se maneja la generación aleatoria de resultados y la gestión segura de las apuestas, asegurando una experiencia de usuario confiable y justa. Además, estas aplicaciones suelen incluir características adicionales como horóscopos y estadísticas para enriquecer la experiencia del usuario."></CardAppAlt>

                <CardApp imgSrc={Test}  title="Lotto" text="El Lotto es un popular juego de lotería en el que los jugadores seleccionan una serie de números de un conjunto predefinido, generalmente entre 1 y 49 o 1 y 59, dependiendo de las reglas específicas del juego. Durante el sorteo, se extraen al azar una cantidad específica de números, y los jugadores ganan premios si sus números coinciden con los números sorteados. Los premios varían según la cantidad de números acertados y pueden incluir desde pequeñas sumas de dinero hasta grandes jackpots acumulados.Con el avance de la tecnología, el Lotto también se ha adaptado al mundo digital, permitiendo a los jugadores comprar boletos y verificar resultados en línea a través de aplicaciones web y móviles. Estas plataformas digitales ofrecen comodidad y accesibilidad, permitiendo a los jugadores participar en sorteos desde cualquier lugar y en cualquier momento."></CardApp>

            </section>


                <div className="slider movil">
                        <div className="payment-info-mobile " id="payment-slide">

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                            <a href="#"><img className="footer-img" src={Test}></img></a>

                        </div>
                </div>
    </>
        
  
  }
  
  export default head
