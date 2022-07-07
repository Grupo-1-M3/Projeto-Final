/* eslint-disable no-useless-escape */
import "./styles.css";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const RegisterPF = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$", "Apenas letras!"),
    surname: yup
      .string()
      .required("Sobrenome obrigatório")
      .matches("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$", "Apenas letras!"),
    cpf: yup
      .string()
      .required("CPF obrigatório")
      .matches("[0-9]{11}", "CPF inválido"),
    birthDate: yup
      .string()
      .required("Informe data de nascimento")
      .matches("[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}", "formato inválido ex: 01/01/1990"),
    phone: yup
      .string().required("Contato obrigatório"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      // eslint-disable-next-line no-useless-escape
      .matches("^(?=.{6,})", "Min. 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Confimação de senha obrigatória")
      .oneOf([yup.ref("password")], "Senha não é identica")    
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
      <div className="container">
        <div className="container body">
          <h1>TrashNoFood</h1>
          <p>Crie sua conta</p>
          <form className="formRegisterPF" onSubmit={handleSubmit()}>

            {errors.name && <label>{errors.name.message}</label>}
            <input placeholder="Nome" {...register("name")} />
            
            {errors.surname && <label>{errors.surname.message}</label>}
            <input placeholder="Sobrenome" {...register("surname")} />
            
            {errors.cpf && <label>{errors.cpf.message}</label>}
            <input placeholder="CPF" {...register("cpf")} />
            
            {errors.birthDate && <label>{errors.birthDate.message}</label>}
            <input placeholder="Data de Nascimento" {...register("birthDate")} />

            {errors.phone && <label>{errors.phone.message}</label>}
            <input placeholder="Telefone" {...register("phone")} />

            {errors.email && <label>{errors.email.message}</label>}
            <input placeholder="Digite seu email" {...register("email")} />

            {errors.password && <label>{errors.password.message}</label>}
            <input placeholder="Digite aqui sua senha" type="password" {...register("password")} />
            
            {errors.confirmPassword && <label>{errors.confirmPassword.message}</label>}
            <input placeholder="Digite novamente sua senha" type="password" {...register("confirmPassword")} />
                         
            <button type="submit">Cadastrar</button>
          </form>
          {errors.status && <label>{errors.data.response.data.message}</label>}
        </div>
      </div>
  );
};

export default RegisterPF;
