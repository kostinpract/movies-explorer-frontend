import React from 'react';
import { Link } from 'react-router-dom';
import "./Page404.css";

function Page404() {

  return (
    <div className='page404'>
      <h2 className='page404__title'>404</h2>
      <p className='page404__info'>Страница не найдена</p>
      <Link to='/' className='page404__link'>
        Назад
      </Link>
    </div>
  );

}

export default Page404;