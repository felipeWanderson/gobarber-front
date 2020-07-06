import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signUpRequest } from '../../store/modules/auth/actions';

import Logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('o e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No minímo 6 digitos')
    .required('A senha é obrigatória'),
});

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
    history.push('/');
  }
  return (
    <>
      <img src={Logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho Login</Link>
      </Form>
    </>
  );
}

export default SignUp;
