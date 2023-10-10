import React from 'react';
import "./Techs.css";

function Techs() {

  return (
    <section class="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className='techs__mainContainer'>
        <h2 className='techs__mainTitle'>7 технологий</h2>
        <p className='techs__mainDescription'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className='techs__cardContainer'>
          <div className='techs__card'>
            <p className='techs__cardText'>HTML</p>
          </div>
          <div className='techs__card'>
            <p className='techs__cardText'>CSS</p>
          </div>
          <div className='techs__card'>
            <p className='techs__cardText'>JS</p>
          </div>
          <div className='techs__card'>
            <p className='techs__cardText'>React</p>
          </div>
          <div className='techs__card'>
            <p className='techs__cardText'>Git</p>
          </div>
          <div className='techs__card'>
            <p className='techs__cardText'>Express.js</p>
          </div>
          <div className='techs__card'>
            <p className='techs__cardText'>mongoDB</p>
          </div>
          
        </div>
      </div>
    </section>
  );

}

export default Techs;