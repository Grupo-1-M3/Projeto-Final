import React from "react";
import { Container, Form } from "./style";
import Input from "../../../components/Input";
import SelectContent from "../../../components/Select";
import Button from "../../../components/Button";
import { useHistory, Redirect } from "react-router-dom";
import formSchema from "./formYup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import Options from "../../../components/Select/Option";

const RegisterPJ = ({ authenticated }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const history = useHistory();
  const handleNavigation = () => {
    return history.push("/login");
  };
  const onSubmitFunction = ({
    name,
    email,
    password,
    CNPJ,
    category,
    phone,
    address,
  }) => {
    const user = { name, email, password, CNPJ, category, phone, address };
    api
      .post("/register", user)
      .then((_) => {
        toast.success("Parabéns, conta criada com sucesso!");
        return history.push("/login");
      })
      .catch((_) => toast.error("Erro ao criar a conta, e-mail já cadastrado"));
    reset();
  };
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Button onClick={handleNavigation}>Voltar</Button>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Crie a sua conta</h1>
        <h3>Parceira</h3>
        <Input
          label="Razão Social"
          placeholder="Digite aqui sua Razão Social"
          name="name"
          register={register}
          error={errors.name?.message}
        />
        <Input
          type="number"
          label="CNPJ"
          placeholder="Digite aqui seu CNPJ"
          name="cnpj"
          register={register}
          error={errors.cnpj?.message}
        />
        <Input
          label="Contato"
          placeholder="Digite aqui seu telefone para contao"
          name="phone"
          register={register}
          error={errors.phone?.message}
        />
        <Input
          label="Endereço"
          placeholder="Digite aqui o endereço da sua empresa"
          name="address"
          register={register}
          error={errors.address?.message}
        />
        <SelectContent
          label="Categoria"
          placeholder="Escolha sua Categoria"
          name="category"
          error={errors.category?.message}
          register={register}
        >
          <Options value="Panificadora">Panificadora</Options>
          <Options value="Mercado">Mercado</Options>
          <Options value="Restaurante">Restaurante</Options>
        </SelectContent>
        <Input
          label="E-mail"
          placeholder="Digite aqui seu email"
          name="email"
          register={register}
          error={errors.email?.message}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          name="password"
          register={register}
          error={errors.password?.message}
        />
        <Input
          label="Confirme sua senha"
          type="password"
          placeholder="Confirme sua senha"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword?.message}
        />
        <button type="submit">Cadastre-se</button>
      </Form>
    </Container>
  );
};

export default RegisterPJ;
