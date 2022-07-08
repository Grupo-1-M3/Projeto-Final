/* eslint-disable no-useless-escape */
import * as yup from "yup";

const formSchemaTwoStage = yup.object().shape({
  road: yup
    .string()
    .required("Rua obrigatória"),
  complement: yup
    .string(),
  district: yup
    .string()
    .required("Bairro obrigatório"),
  city: yup
    .string()
    .required("Cidade obrigatória"),
  stateCity: yup
    .string()
  .required("Estado obrigatório"),
  zip: yup
    .string()
    .required("CEP obrigatório"),
});

export default formSchemaTwoStage;