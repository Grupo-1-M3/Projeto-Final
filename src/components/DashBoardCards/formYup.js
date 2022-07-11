import * as yup from "yup";

const formSchema = yup.object().shape({
    category: yup.string().required("Campo Obrigatório"),
    name: yup.string().required("Campo Obrigatório"),
    price: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
    img: yup.string().required("Campo Obrigatório"),
    validity: yup.string().required("Campo Obrigatório"),
})

export default formSchema