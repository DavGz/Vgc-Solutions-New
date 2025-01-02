import React from "react";


function about() {
    return (
        <div>
            <section className="about">
                <div className="about-video">    
                    <video id="miVideo" loop className="video-vgc" autoPlay playsInline muted > 
                        <source src="/assets/img/vgcvideo.mp4" type="video/mp4"></source>
                            Tu navegador no soporta la etiqueta de video.
                    </video>
                </div>
                    <div className="about-text">
                        <div className="exp-area">
                            <p className="exp">&nbsp;<i className="far fa-check-circle marcador"></i><span>Aplicaciones Web</span></p>
                            <p className="exp">&nbsp;<i className="far fa-check-circle marcador"></i><span>Aplicaciones Android</span></p>
                            <p className="exp">&nbsp;<i className="far fa-check-circle marcador"></i><span>Back End / Front End</span></p>
                            <p className="exp">&nbsp;<i className="far fa-check-circle marcador"></i><span>UI/UX Interfaz</span></p>
                            <p className="exp">&nbsp;<i className="far fa-check-circle marcador"></i><span>Soluciones iGaming</span></p>
                            <p className="exp">&nbsp;<i className="far fa-check-circle marcador"></i><span>Aplicaciones Certificadas SENCAMER.</span></p>
                        </div>
                    </div>
            </section>

        </div>
    )
        
  
  }
  
  export default about
  