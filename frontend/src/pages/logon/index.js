import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={ logo } alt="Be The Hero"/>
        <form action="">
          <h1>Faça seu Logon</h1>
          <input placeholder="Sua ID" />
          <button className="button" type="submit">Entrar</button>
          <Link to="/register" className="back-link">
            <FiLogIn size={ 16 } color="#E02041" />
             Não tenho cadastro 
          </Link>
        </form>
      </section>
      <img src={ heroesImg } alt="Heroes" />
    </div>
  );
}