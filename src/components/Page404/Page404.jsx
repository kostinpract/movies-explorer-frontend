import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Page404.css";

function Page404() {
  const navigate = useNavigate()

  return (
    <div className='page404'>
      <h2 className='page404__title'>404</h2>
      <p className='page404__info'>Страница не найдена</p>
      <p onClick={()=> navigate(-1)} className='page404__link'>
        Назад
      </p>
    </div>
  );

}

export default Page404;