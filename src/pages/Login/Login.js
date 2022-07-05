import { Container, Form, ContainerMessage } from "./style";

const Login = () => {

  return (
    <Container>
      <Form>
        <h1>Login</h1>
        <input placeholder="Digite aqui seu email"/>
        <input placeholder="Digite aqui sua senha"/>
        <button type="submit">Entrar</button>
        <ContainerMessage>
          <strong>Ainda não possui uma conta?</strong>
        </ContainerMessage> 
        <button type="button">Cadastre-se</button>
      </Form>
    </Container>
  )
}

export default Login;