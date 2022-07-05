import { Container, Form, ContainerMessage } from "./style";

import { toast } from "react-toastify"

import { useHistory } from "react-router-dom";
import{ useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "../../services/api"

const Login = () => {
  

  return (
    <Container>
      <Form>
        <h1>Login</h1>
        <input placeholder="Digite aqui seu email"/>
        <input placeholder="Digite aqui sua senha"/>
        <button type="submit">Entrar</button>
        <ContainerMessage>
          <strong>Ainda não possui uma conta?</strong>
        </ContainerMessage> 
        <button type="button">Cadastre-se</button>
      </Form>
    </Container>
  )
}

export default Login;