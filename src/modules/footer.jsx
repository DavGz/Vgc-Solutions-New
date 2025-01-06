import React from "react";


function footer() {
    return (
        <div>
                <section className="contact d-none" id="contacts">
                    <div className="center-text">
                        <h2>Contactanos</h2>
                    </div>
                    <div className="center-qr">
                        <img src="./assets/img/qr.jpg" alt=""></img>
                    </div>
                </section>





            <div className="footer">
                <div className="copyright">
                    <p>2023 Veneto Games Corp // VGC , Todos los derechos reservados</p>
                </div><a href="#root" className="scroll-top"><i className="bx bxs-up-arrow"></i></a>
                
            </div>  


            <div className="container-bar" id="social-media">
                <input type="checkbox" id="btn-social"></input>
                <label htmlFor="btn-social" className="fa fa-thumbs-up"></label>
                    <div className="icon-social">
                        <a href="#" target="_blank" className="fa fa-linkedin">
                            <span id="title">LinkedIn</span>
                        </a>
                        <a href="#" target="_blank" className="fa fa-instagram">
                            <span id="title">Instagram</span>
                        </a>
                        <a href="#" target="_blank" className="fa fa-facebook">
                            <span id="title">Facebook</span>
                        </a>
                        <a href="#" target="_blank" className="fa fa-twitter">
                            <span id="title">Twitter</span>
                        </a>

                    </div>
            </div>
        </div>
    )
        
  
  }
  
  export default footer