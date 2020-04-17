import React from 'react';

import '../../../src/global.css'
import './home.css'


import api from '../../../src/api/configaxios'

import logo from './images/logo.png'
import { Link } from 'react-router-dom';
import { FiPlus, FiUser } from 'react-icons/fi'
 
function Home (){
  const handleShow = values => {
    api.post('/sessions', values)
     .then(resp => {
       const { data } = resp
       console.log(data);
     })
     
   }
  return(
    <div className="corpo-master">
      <div className="topo">
        <img src={logo} alt=""/> 
        <h1>Cts Catalogo</h1>
        <div className="topo-links-right1"> 
            <div className="link-add">
              <Link className="btn" to="/products">
                <FiPlus size={16} color={'#fff'}/>Cadastar novo Produto
                
              </Link>
            </div>
            <div className="new-user">
            <div className="link-add">
              <Link className="btn" to="/usercadastro">
                <FiUser size={16} color={'#fff'}/>Cadastar funcionario
               
              </Link>
            </div>
            </div>
        </div>
      </div>
      <div className="corpo-menu">
        <h1>Listagem de produtos cadastrados</h1>
      </div>
      <div className="corpo-produto" onLoad={handleShow}>
        <h1>{}</h1>
      </div>
    </div>
  );
}

export default Home;