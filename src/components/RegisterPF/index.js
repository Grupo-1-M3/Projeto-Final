/* eslint-disable no-useless-escape */
import "./styles.css";
import { useForm, useInput } from "lx-react-form";

import Button from "../Button";
import { useHistory, Redirect } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

const RegisterPF = ({ authenticated }) => {

  /* const fieldForm = {
    name: useInput({
      name: "name",
      errorText: {
        required: "Nome obrigatório"
      }
    }),
    cpf: useInput({
      name: "cpf",
      errorText: {
        required: "CPF obrigatório"
      }
    }),
    birth_date: useInput({
      name: "birth_date",
      errorText: { required: "Data de nascimento obrigatória" },  
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
    }),
    phone: useInput({
      name: "phone",
      errorText: {
        required: "Telefone obrigatório"
      }
    }),
    email: useInput({
      name: "email",
      validation: "email",
      errorText: {
        required: "Email obrigatório",
      },
    }),
    password: useInput({
      name: "password",
      validation: "senha",
      errorText: {
        required: "Digite a senha",
      }
    }),
    confirmPassword: useInput({
      name: "confirmPassword",
      same: password.value,
    }),
    road: useInput({
      name: "road",
      errorText: {
        required: "Rua obrigatória",
      }
    }),
    complement: useInput({
      name: "complement",
      optional: true,
    }),
    district: useInput({
      name: "district",
      optional: true,
    }),
    city: useInput({
      name: "city",
      errorText: {
        required: "Cidade obrigatório",
      }
    }),
    stateCity: useInput({
      name: "stateCity",
      errorText: {
        required: "Estado obrigatório",
      }
    }),
    zip: useInput({
      name: "zip",
      optional: true,
    }),
  } */

  const name = useInput({
    name: "name",
    errorText: {
      required: "Nome obrigatório"
    }
  });
  const cpf = useInput({
    name: "cpf",
    errorText: {
      required: "CPF obrigatório"
    }
  });
  const birth_date = useInput({
    name: "birth_date",
    errorText: { required: "Data de nascimento obrigatória" },  
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
      required: "Telefone obrigatório"
    }
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
    validation: "senha",
    errorText: {
      required: "Digite a senha",
    }
  });
  const confirmPassword = useInput({
    name: "confirmPassword",
    same: password.value,
  });
  const road = useInput({
    name: "road",
    errorText: {
      required: "Rua obrigatória",
    }
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
      required: "Cidade obrigatório",
    }
  });
  const stateCity = useInput({
    name: "stateCity",
    errorText: {
      required: "Estado obrigatório",
    }
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
    formFields: [name,cpf,birth_date,phone,email,password,confirmPassword,road,complement,district,city,stateCity,zip],
    submitCallback: (formData) => {
      onSubmitFunction(formData);
    },
  });

  const history = useHistory();
  
  
  const handleNavigation = () => {
    return history.push("/login");
  };
  
  const onSubmitFunction = ({ name, cpf, birthDate, phone, email, password, road, complement, district, city, stateCity, zip }) => {

    const user = { name, cpf, birthDate, phone, email, password,
      address: {road, complement, district, city, stateCity, zip}
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
        <div className="container">
          <Button onClick={handleNavigation}>Voltar</Button>

          <div className="container body">
            <h1>TrashNoFood</h1>
            <p>Crie sua conta</p>
            {name.error && <label>{name.error}</label>}
            <input placeholder="Nome" {...name.inputProps} />

            {cpf.error && <label>{cpf.error}</label>}
            <input placeholder="CPF" {...cpf.inputProps} />

            {birth_date.error && <label>{birth_date.error}</label>}
            <input
              placeholder="Data de Nascimento"
              {...birth_date.inputProps}
            />

            {phone.error && <label>{phone.error}</label>}
            <input placeholder="Telefone" {...phone.inputProps} />

            {email.error && <label>{email.error}</label>}
            <input placeholder="Email" {...email.inputProps} />

            {password.error && <label>{password.error}</label>}
            <input
              placeholder="Digite aqui sua senha"
              type="password"
              {...password.inputProps}
            />

            {confirmPassword.error && <label>{confirmPassword.error}</label>}
            <input
              placeholder="Digite novamente sua senha"
              type="password"
              {...confirmPassword.inputProps}
            />

            <button type="button" onClick={form.nextStep}>
              Proximo Passo
            </button>
          </div>
        </div>
      )}

      {form.step === 1 && (
        <div className="container">
          <Button onClick={form.previousStep}>Passo anterior</Button>
          <div className="container body">
            <h1>TrashNoFood</h1>
            <p>Segunda Etapa</p>
            {road.error && <label>{road.error}</label>}
            <input placeholder="Rua" {...road.inputProps} />

            <input placeholder="Complemento" {...complement.inputProps} />

            <input placeholder="Bairro" {...district.inputProps} />

            {city.error && <label>{city.error}</label>}
            <input placeholder="Cidade" {...city.inputProps} />

            {stateCity.error && <label>{stateCity.error}</label>}
            <input placeholder="Estado" {...stateCity.inputProps} />

            <input placeholder="CEP" {...zip.inputProps} />

            <button type="submit">Cadastrar</button>
          </div>
        </div>
      )}
    </form>
  );
};

export default RegisterPF;
