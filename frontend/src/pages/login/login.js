import React from 'react';
import {ErrorMessage, Formik, Form, Field} from 'formik'
import * as yup from 'yup';

import {history } from '../../history'

import api from '../../api/configaxios'

import './login.css'

const login = () => {
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

  <div>
      <h1>Login</h1>
      <p>Acessar o painel</p>
      <Formik onSubmit={handleSubmit} initialValues={{}} validationSchema={validation}>
          <Form className="App-form-login">
            <div className="App-formp-group">
              <Field  name="email" className="App-form-fild"/>
              <ErrorMessage component="span" name="email" className="App-form-error"/>
            </div>
            <div className="App-formp-group">
              <Field  name="password" className="App-form-fild"/>
              <ErrorMessage component="span" name="password" className="App-form-error"/>
            </div>
            <button className="App-btn" type="submit">Login</button>
          </Form>
      </Formik>
    </div>
  )
}

export default login;