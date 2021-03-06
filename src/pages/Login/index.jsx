import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "./formYup";
import { api } from "../../services/api";

import Button from "../../components/Button";
import { Container, Form, ContainerMessage } from "./style";
import Input from "../../components/Input";
import { motion } from "framer-motion";

const Login = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@TrashNoFood:token");

    if (token) {
      return setAuth(true);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  if (auth) {
    return <Redirect to="/vitrine" />;
  }

  const handleLogin = async (data) => {
    const response = await api.post("/login", data).catch((err) => {
      console.log(err);
      toast.error("Ops! algo não está certo");
    });

    const { user, accessToken } = response.data;

    localStorage.setItem("@TrashNoFood:token", accessToken);
    localStorage.setItem("@TrashNoFood:id", JSON.stringify(user.id));

    toast.success("Login feito");

    setAuth(true);

    history.push("/vitrine");
  };

  return (
    <Container>
      <motion.div
        initial={{ x: -1200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button onClick={() => history.push("/")}> Voltar </Button>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <h1>Login de Usuário</h1>
          <Input
            register={register}
            name="email"
            label="Email"
            placeholder="Digite aqui seu email"
            error={errors.email?.message}
          />
          <Input
            register={register}
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
          <button type="button" onClick={() => history.push("/register")}>
            Cadastre-se
          </button>
        </Form>
      </motion.div>
    </Container>
  );
};

export default Login;
