import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";
import{ useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {api} from "../../services/api";

import { Container, Form, ContainerMessage } from "./style";


const Login = () => {

  const [ auth, setAuth ] =  useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@TrashNoFood:token");

    if (token) {
      return setAuth(true);
    }
  }, []);
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
});

const { 
    register, 
    handleSubmit, 
    formState: { errors },
} = useForm({
    resolver: yupResolver(schema),
});

const history = useHistory();

if(auth) {
  return <Redirect to="/dashboard"/>;
}

const handleLogin = async (data) => {
  const response = await api.post("login", data).catch((err) => { 
    console.log(err);  
    toast.error("Ops! algo não está certo");
  });

  const { user, accessToken } = response.data;

    localStorage.setItem("@TrashNoFood:token", accessToken);
    localStorage.setItem("@TrashNoFood:id", JSON.stringify(user.id));

    toast.success("Login feito");

    setAuth(true)
    history.push("/dashboard")
}

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <h1>Login</h1>
        <input 
          {...register("email")}
          name="email" 
          label="Email"
          placeholder="Digite aqui seu email"
          error={errors.email?.message}
        />
        <input 
          {...register("password")} 
          name="password" 
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          error={errors.password?.message}
        />
        <button type="submit">Entrar</button>
        <ContainerMessage>
          <strong>Ainda não possui uma conta?</strong>
        </ContainerMessage> 
        <button type="button" onClick={() => history.push('/register')}>Cadastre-se</button>
      </Form>
    </Container>
  )
}

export default Login;