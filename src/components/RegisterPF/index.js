/* eslint-disable no-useless-escape */
import "./styles.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import formSchema from "./formYup";
import formSchemaTwoStage from "./formYupTwoStage";

import Button from "../Button";
import { useHistory, Redirect } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

const RegisterPF = ({ authenticated }) => {
  const [stage, setStage] = useState(0);
  const [firstStep, setFirstStep] = useState({});

  const totalSchemas = [formSchema, formSchemaTwoStage];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(totalSchemas[stage]) });

  const history = useHistory();

  const handleNavigation = () => {
    return history.push("/login");
  };

  const previousStep = () => {
    setStage(0)
  }

  const handleNextStep = ({ email, password, name, cpf, birth_date, phone }) => {
    setFirstStep({email, password, name, cpf, birth_date, phone})
    console.log(firstStep)
    setStage(1)
  };

  const onSubmitFunction = ({road, complement, district, city, stateCity, zip}) => {
    const user = {...firstStep, road, complement, district, city, stateCity, zip};
    console.log(user)
    api
      .post("/register", user)
      .then((_) => {
        toast.success("Parabéns, conta criada com sucesso!");
        return history.push("/login");
      })
      .catch((_) => toast.error("Erro ao criar a conta, e-mail já cadastrado"));
  };
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return !stage ? (
    <div className="container">
      <Button onClick={handleNavigation}>Voltar</Button>
      <div className="container body">
        <h1>TrashNoFood</h1>
        <p>Crie sua conta</p>
        <form
          className="formRegisterPF"
          onSubmit={handleSubmit(handleNextStep)}
        >
          {errors.name && <label>{errors.name.message}</label>}
          <input placeholder="Nome" {...register("name")} />

          {errors.cpf && <label>{errors.cpf.message}</label>}
          <input placeholder="CPF" {...register("cpf")} />

          {errors.birth_date && <label>{errors.birth_date.message}</label>}
          <input placeholder="Data de Nascimento" {...register("birth_date")} />

          {errors.phone && <label>{errors.phone.message}</label>}
          <input placeholder="Telefone" {...register("phone")} />

          {errors.email && <label>{errors.email.message}</label>}
          <input placeholder="Digite seu email" {...register("email")} />

          {errors.password && <label>{errors.password.message}</label>}
          <input
            placeholder="Digite aqui sua senha"
            type="password"
            {...register("password")}
          />

          {errors.confirmPassword && (
            <label>{errors.confirmPassword.message}</label>
          )}
          <input
            placeholder="Digite novamente sua senha"
            type="password"
            {...register("confirmPassword")}
          />

          <button type="submit">Proximo Passo</button>
        </form>
        {errors.status && <label>{errors.data.response.data.message}</label>}
      </div>
    </div>
  ) : (
    <div className="container">
      <Button onClick={previousStep}>Passo anterior</Button>
      <div className="container body">
        <h1>TrashNoFood</h1>
        <p>Segunda Etapa</p>
        <form
          className="formRegisterPF"
          onSubmit={handleSubmit(onSubmitFunction)}
        >
          {errors.road && <label>{errors.road.message}</label>}
          <input placeholder="Rua" {...register("road")} />

          {errors.complement && <label>{errors.complement.message}</label>}
          <input placeholder="Logradouro" {...register("complement")} />

          {errors.district && <label>{errors.district.message}</label>}
          <input placeholder="Bairro" {...register("district")} />

          {errors.city && <label>{errors.city.message}</label>}
          <input placeholder="Cidade" {...register("city")} />

          {errors.stateCity && <label>{errors.stateCity.message}</label>}
          <input placeholder="Estado" {...register("stateCity")} />

          {errors.zip && <label>{errors.zip.message}</label>}
          <input placeholder="CEP" type="cep" {...register("zip")} />

          <button type="submit">Cadastrar</button>
        </form>
        {errors.status && <label>{errors.data.response.data.message}</label>}
      </div>
    </div>
  );
};

export default RegisterPF;
