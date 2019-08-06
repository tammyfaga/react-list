import React from 'react';

import "./error.scss";

const Error = ({ onRetry }) => (
  <div className="error">
    <h1>Ops!</h1>
    <p>Ocorreu um erro inesperado ao carregar a lista de notas</p>
    <button className="error__button" onClick={onRetry}>Tentar novamente</button>
  </div>
);

export default Error;
