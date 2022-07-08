/* eslint-disable no-useless-escape */
import * as yup from "yup";

function checkAge(birthDate) {
  let dateNow = new Date();
  let currentYear = dateNow.getFullYear();
  let currentMonth = dateNow.getMonth() + 1;
  let currentDay = dateNow.getDate();

  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1;
  let birthYear = birthDate.getFullYear();
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
}

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .matches("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$", "Apenas letras!"),
  cpf: yup
    .string()
    .required("CPF obrigatório")
    .matches("[0-9]{11}", "CPF inválido"),
  birth_date: yup
    .date()
    .typeError("Data de aniversário obrigatório")
    .test("CheckAge", "Min. 18 anos", checkAge),
  phone: yup.string().required("Contato obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    // eslint-disable-next-line no-useless-escape
    .matches("^(?=.{6,})", "Min. 6 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confimação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senha não é identica"),
});

export default formSchema;