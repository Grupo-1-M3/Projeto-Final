import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "./formYup";
import { api } from "../../services/api";

import { Container, Form, ContainerMessage } from "./style";
import Input from "../../components/Input";
import { motion } from "framer-motion"

const LoginPartiner = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@TrashNoFoodPartiner:token");

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
    return <Redirect to="/dashboardPartiner" />;
  }

  const handleLogin = async (data) => {
    const response = await api.post("/login", data).catch((err) => {
      console.log(err);
      toast.error("Ops! algo não está certo");
    });

    const { user, accessToken } = response.data;

    localStorage.setItem("@TrashNoFoodPartiner:token", accessToken);
    localStorage.setItem("@TrashNoFoodPartiner:id", JSON.stringify(user.id));

    toast.success("Login feito");

    setAuth(true);
    history.push("/dashboardPartiner");
  };

  return (
    <Container>
      <motion.div 
        initial={{ x: 1100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Form onSubmit={handleSubmit(handleLogin)}>
          <h1>Login</h1>
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
            <strong>Ainda não possui uma conta parceira?</strong>
          </ContainerMessage>
          <button type="button" onClick={() => history.push("/registerPartiner")}>
            Cadastre-se
          </button>
        </Form>
      </motion.div>
    </Container>
  );
};

export default LoginPartiner;
