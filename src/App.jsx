import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './modules/footer.jsx'
import Infohome from './modules/info-home.jsx'
import About from './modules/about.jsx'
import Services from './modules/services.jsx'
import SportRetail from './modules/sports&retail.jsx'
import Products from './modules/products.jsx'

function App() {
  return (
    <div>
      <Infohome/>
      <About/>
      <Services/>
      <Products/>
      <SportRetail/>
      <Footer/>
      
    </div>

  );
}

export default App
