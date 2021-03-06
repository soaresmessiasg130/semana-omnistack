import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi'
import logo from '../../assets/logo.svg';
import './styles.css';

export default function Register () {
  return (
    <div className="register-container">
      <div className="content">
        
        <section>
          <img src={ logo } alt="Be The Hero"/>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude as pessoas encontrar os casos da sua ONG</p>
          <Link to="/register" className="back-link">
            <FiArrowLeft size={ 16 } color="#E02041" />
             Tenho cadastro 
          </Link>
        </section>
        
        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />
          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={ { width: 80 } } />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>

      </div>
    </div>
  );
}