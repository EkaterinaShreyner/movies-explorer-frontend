import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return(
    <div className="not-found">
      <h3 className="not-found__title">404</h3>
      <p className="not-found__subtitle">Страница не найдена</p>
      <Link className="not-found__button" to={-2}>Назад</Link>
    </div>
  )
}

export default PageNotFound;