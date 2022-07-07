/* eslint-disable no-useless-escape */
import "./styles.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "./formYup"
import Button from "../Button"
import { useHistory , Redirect} from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

const RegisterPF = ({authenticated}) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const handleNavigation = () => {
    return history.push("/login");
  };

  const onSubmitFunction = ({
    email,
    password,
    name,
    cpf,
    birth_date,
    phone,
  }) => {
    const user = { email, password, name, cpf, birth_date, phone};
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
  return (
      <div className="container">
        <Button onClick={handleNavigation}>Voltar</Button>
        <div className="container body">
          <h1>TrashNoFood</h1>
          <p>Crie sua conta</p>
          <form className="formRegisterPF" onSubmit={handleSubmit(onSubmitFunction)}>

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
