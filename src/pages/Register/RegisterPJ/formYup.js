import * as yup from "yup";

const validateUpperCase = "^(?=.*[A-Z])";
const validateLowerCase = "^(?=.*[a-z])";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Obrigatório")
    .matches(validateUpperCase, "Digite apenas letras")
    .matches(validateLowerCase, "Digite apenas letras"),
  email: yup.string().email("E-mail inválido").required("Obrigatório"),
  password: yup
    .string()
    .required("Obrigatória")
    .min(8, "Senha incompativel: mínimo 8 caracteres")
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])",
      "Senha incompativel: necessário conter letras (maiúsculas e minúsculas), caracteres especiais e números"
    ),
  confirmPassword: yup
    .string()
    .required("Obrigatória")
    .oneOf([yup.ref("password"), null], "Senhas não conferem"),
  cnpj: yup.string().required("Obrigatório"),
  category: yup.string().required("Obrigatória"),
  phone: yup.string().required("Obrigatório"),
  address: yup.string().required("Obrigatório"),
});

export default formSchema;
