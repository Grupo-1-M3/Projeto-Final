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
import { motion } from "framer-motion";
import { useState } from "react";

const RegisterPJ = ({ authenticated }) => {
  const [cnpj, setCNPJ] = useState("");
  const [phone, setPhone] = useState("");

  const maskCNPJ = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const maskPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)$/, "$1");
  };
  

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

      <motion.div
        initial={{scale: 0}}
        animate={{ scale: 1}}
        transition= {{duration: 0.5}}
      >
        <Button onClick={handleNavigation}>Voltar</Button>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Crie a sua conta</h1>
          <h3>Pessoa Jurídica</h3>
          <Input
            label="Razão Social"
            placeholder="Digite aqui sua Razão Social"
            name="name"
            register={register}
            error={errors.name?.message}
          />
          <Input
            value={cnpj}
            onChange={(e) => setCNPJ(maskCNPJ(e.target.value))}
            placeholder="CNPJ: 00.000.000/0001-00"
            label="CNPJ"
            name="cnpj"
            register={register}
            error={errors.cnpj?.message}
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(maskPhone(e.target.value))}
            placeholder="Telefone (00) 00000-0000"
            label="Contato"
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
      </motion.div>
    </Container>
  );
};

export default RegisterPJ;
