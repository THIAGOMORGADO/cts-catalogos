import React from 'react';

import {ErrorMessage, Formik, Form, Field} from 'formik'
import * as yup from 'yup';
import {history } from '../../history'
import api from '../../api/configaxios'

import '../login/login';

const register = () => {
  const handleSubmit = values => {
   api.post('/users', values)
    .then(resp => {
      const { data } = resp
      console.log(data);
      if(data){
        localStorage.setItem('app-token', data);
        history.push('/login')
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

            <h2>Cadastra um novo usuario</h2>
          </div>
            <Formik onSubmit={handleSubmit} initialValues={{}} validationSchema={validation}>
                <Form className="App-form-login">
                  <div className="App-formp-group">
                  <label>Nome:</label>
                    <Field  name="name" className="App-form-fild"/>
                    <ErrorMessage component="span" name="name" className="App-form-error"/>
                  </div>
                  <div className="App-formp-group">
                  <label>Email:</label>
                    <Field  name="email" className="App-form-fild"/>
                    <ErrorMessage component="span" name="email" className="App-form-error"/>
                  </div>
                  <div className="App-formp-group">
                    <label>Senha:</label>
                    <Field  name="password" type="password" className="App-form-fild"/>
                    <ErrorMessage component="span" name="password" className="App-form-error"/>
                  </div>
                  <h3>Faça seu Login</h3>
                  <button className="App-btn" type="submit">Cadastra-se</button>
                </Form>
            </Formik>
        </div>
      </div>
  )
}

export default register;