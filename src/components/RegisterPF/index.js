/* eslint-disable no-useless-escape */
import { Container, Form } from "./style";
import { useForm, useInput } from "lx-react-form";
import Input from "../Input";

import Button from "../Button";
import { useHistory, Redirect } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

import { motion } from "framer-motion";

const RegisterPF = ({ authenticated }) => {
  const name = useInput({
    name: "name",
    errorText: {
      required: "Obrigatório",
    },
  });
  const cpf = useInput({
    name: "cpf",
    errorText: {
      required: "Obrigatório",
    },
  });
  const birth_date = useInput({
    name: "birth_date",
    errorText: { required: "Data - Obrigatória" },
    minLength: 10,
    maxLength: 10,
    customMask: {
      expressions: [
        {
          regex: /\D/g,
          replace: "",
        },
        {
          regex: /(\d{2})(\d)/,
          replace: "$1/$2",
        },
        {
          regex: /(\d{2})(\d{4})/,
          replace: "$1/$2",
        },
      ],
    },
    customRule: {
      callback: (birthDate) => {
        let dateNow = new Date();
        let currentYear = dateNow.getFullYear();
        let currentMonth = dateNow.getMonth() + 1;
        let currentDay = dateNow.getDate();

        let birthDay = +birthDate.slice(0, 2);
        let birthMonth = +birthDate.slice(3, 5);
        let birthYear = +birthDate.slice(-4);
        let age = currentYear - birthYear;

        if (currentMonth < birthMonth) {
          age--;
        } else if (currentMonth === birthMonth) {
          if (currentDay < birthDay) {
            age--;
          }
        }

        if (age >= 18) {
          return true;
        } else {
          return false;
        }
      },
      error: "Você é menor de idade",
    },
  });
  const phone = useInput({
    name: "phone",
    errorText: {
      required: "Obrigatório",
    },
  });
  const email = useInput({
    name: "email",
    validation: "email",
    errorText: {
      required: "Email obrigatório",
    },
  });
  const password = useInput({
    name: "password",
    minLength: 8,
    errorText: {
      required: "Senha Obrigatória",
    },
  });
  const confirmPassword = useInput({
    name: "confirmPassword",
    same: password.value,
    errorText: {
      required: "Confirmação de senha Obrigatória",
    },
  });
  const road = useInput({
    name: "road",
    errorText: {
      required: "Obrigatória",
    },
  });
  const complement = useInput({
    name: "complement",
    optional: true,
  });
  const district = useInput({
    name: "district",
    optional: true,
  });
  const city = useInput({
    name: "city",
    errorText: {
      required: "Obrigatória",
    },
  });
  const stateCity = useInput({
    name: "stateCity",
    errorText: {
      required: "Obrigatório",
    },
  });
  const zip = useInput({
    name: "zip",
    optional: true,
  });

  const form = useForm({
    clearFields: true,
    stepFields: {
      0: [name, cpf, birth_date, phone, email, password, confirmPassword],
      1: [road, complement, district, city, stateCity, zip],
    },
    formFields: [
      name,
      cpf,
      birth_date,
      phone,
      email,
      password,
      confirmPassword,
      road,
      complement,
      district,
      city,
      stateCity,
      zip,
    ],
    submitCallback: (formData) => {
      onSubmitFunction(formData);
    },
  });

  const history = useHistory();

  const handleNavigation = () => {
    return history.push("/login");
  };

  const onSubmitFunction = ({
    name,
    cpf,
    birthDate,
    phone,
    email,
    password,
    road,
    complement,
    district,
    city,
    stateCity,
    zip,
  }) => {
    const user = {
      name,
      cpf,
      birthDate,
      phone,
      email,
      password,
      address: `${road} - ${district}, ${city} - ${stateCity}, ${zip}, ${complement}`,
    };

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
    <form onSubmit={form.handleSubmit}>
      {form.step === 0 && (
        <Container>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Button type="button" onClick={handleNavigation}>
              Voltar
            </Button>

            <Form>
              <h1>TrashNoFood</h1>
              <p>Crie sua conta</p>

              <Input
                label="Nome"
                placeholder="Nome"
                name="name"
                {...name.inputProps}
                error={name?.error}
              />

              <Input
                label="CPF"
                placeholder="Cpf"
                name="cpf"
                {...cpf.inputProps}
                error={cpf?.error}
              />

              <Input
                label={
                  birth_date?.error ? birth_date.error : "Data de nascimento"
                }
                placeholder="Data"
                name="birth_date"
                {...birth_date.inputProps}
              />

              <Input
                label="Telefone"
                placeholder="Telefone"
                name="phone"
                {...phone.inputProps}
                error={phone?.error}
              />

              <Input
                label="Email"
                placeholder="Email"
                name="email"
                {...email.inputProps}
                error={email?.error}
              />

              <Input
                label={password?.error ? password.error : "Senha"}
                placeholder="Digite aqui sua senha"
                name="password"
                type="password"
                {...password.inputProps}
              />

              <Input
                label={
                  confirmPassword?.error
                    ? confirmPassword.error
                    : "Confirmação de Senha"
                }
                placeholder="Digite novamente sua senha"
                name="confirmPassword"
                type="password"
                {...confirmPassword.inputProps}
              />

              <button type="submit" onClick={form.nextStep}>
                Proximo Passo
              </button>
            </Form>
          </motion.div>
        </Container>
      )}

      {form.step === 1 && (
        <Container>
          <motion.div
            initial={{ x: -1200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button type="button" onClick={form.previousStep}>
              Passo anterior
            </Button>
            <Form>
              <h1>TrashNoFood</h1>
              <p>Segunda Etapa</p>

              <Input
                label="Rua"
                placeholder="Digite sua rua"
                name="road"
                {...road.inputProps}
                error={road?.error}
              />

              <Input
                label="Complemento"
                placeholder="Quadra xx, esquina com a..."
                name="complement"
                {...complement.inputProps}
              />

              <Input
                label="Bairro"
                placeholder="Digite seu bairro"
                name="district"
                {...district.inputProps}
              />

              <Input
                label="Cidade"
                placeholder="Digite sua cidade"
                name="city"
                {...city.inputProps}
                error={city?.error}
              />

              <Input
                label="Estado"
                placeholder="Digite seu estado"
                name="stateCity"
                {...stateCity.inputProps}
                error={stateCity?.error}
              />

              <Input
                label="CEP"
                placeholder="Digite o CEP"
                name="zip"
                {...zip.inputProps}
              />

              <button type="submit">Cadastrar</button>
            </Form>
          </motion.div>
        </Container>
      )}
    </form>
  );
};

export default RegisterPF;
