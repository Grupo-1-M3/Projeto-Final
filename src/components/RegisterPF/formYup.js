import * as yup from "yup";

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

  export default formSchema;

  //falta verificar se é maior de 18 anos