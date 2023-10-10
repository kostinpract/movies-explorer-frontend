import React from 'react';
import "./Footer.css";

function Footer() {

  return (

    <footer className='footer'>
      <div className='footer__mainContainer'>
        <p className='footer__name'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className='footer__infoContainer'>
        <p className='footer__mainText footer__mainDate'>© 2020</p>
        <div className='footer__infoContainerYa'>
          <p className='footer__mainText'>Яндекс.Практикум</p>
          <p className='footer__mainText'>Github</p>
        </div>
      </div>
    </footer>

  );

}

export default Footer;