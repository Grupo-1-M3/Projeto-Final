import * as yup from "yup";

const validateUpperCase = "^(?=.*[A-Z])";
const validateLowerCase = "^(?=.*[a-z])";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório!")
    .matches(validateUpperCase, "Digite apenas letras")
    .matches(validateLowerCase, "Digite apenas letras"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .min(8, "Senha incompativel: mínimo 8 caracteres")
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])",
      "Senha incompativel: necessário conter letras (maiúsculas e minúsculas), caracteres especiais e números"
    ),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório!")
    .oneOf([yup.ref("password"), null], "Senhas não conferem"),
  cnpj: yup.string().required("Campo obrigatório!"),
  category: yup.string().required("Campo obrigatório!"),
  phone: yup.string().required("Campo Obrigatório"),
  address: yup.string().required("Campo Obrigatório"),
});

export default formSchema;
