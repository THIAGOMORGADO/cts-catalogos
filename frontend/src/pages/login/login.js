import React from 'react';
import {ErrorMessage, Formik, Form, Field} from 'formik'
import * as yup from 'yup';

import {history } from '../../history'

import api from '../../api/configaxios'
import logo from './images/logo.png'


import './login.css'

const login = (props) => {
  const handleSubmit = values => {
   api.post('/sessions', values)
    .then(resp => {
      const { data } = resp
      if(data){
        localStorage.setItem('app-token', data);
        history.push('/')
      }
    })
  }
  const validation =  yup.object().shape({
    
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
  })
return(

  <div className="App-form-area">
    <div className="aFilhaQueEuTeFalei">
    <div className="App-form-area-img">
    <img src={logo} alt="Cts-Catalogos"/>
      <h2>BEM VINDO AO PAINEL ADMINISTRATIVO </h2>
    </div>
      <Formik onSubmit={handleSubmit} initialValues={{}} validationSchema={validation}>
          <Form className="App-form-login">
            <div className="App-formp-group">
            <label>E-mail:</label>
              <Field  name="email" className="App-form-fild"/>
              <ErrorMessage component="span" name="email" className="App-form-error"/>
            </div>
            <div className="App-formp-group">
              <label>Senha:</label>
              <Field  name="password" type="password" className="App-form-fild"/>
              <ErrorMessage component="span" name="password" className="App-form-error"/>
            </div>
            <h3>Faça seu <strong>Login</strong></h3>
            <button className="App-btn" type="submit">Login</button>
          </Form>
      </Formik>
    </div>
    </div>
  )
}

export default login;