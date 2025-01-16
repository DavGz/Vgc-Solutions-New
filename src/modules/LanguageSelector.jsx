import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import Eng from "../assets/eng.svg";
import Es from "../assets/es.svg";


const LanguageSelector = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='lang-menu'>
      <div className="Langchange">
        <button onClick={toggleVisibility}>
          <FontAwesomeIcon icon={faLanguage} />
        </button>
      </div>
      {isVisible && (
        <div className="langsub">
          <a href="/es" className="lang">
            <img src={Es} alt="Logo" /> ESP
          </a>
          <a href="/en" className="lang">
            <img src={Eng} alt="Logo" /> ENG
          </a>
        </div>
      )}
      <script>
      
      </script>
    </div>



  );
};

export default LanguageSelector;
