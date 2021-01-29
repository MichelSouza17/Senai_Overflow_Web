import { Container, FormLogin, Header, Body, Button } from "./styles";
import Input from "../../components/Input";

function Login() {
  return (
    <Container>
      <FormLogin>
        <Header>
          <h1>BEM VINDO AO SENAI OVERFLOW</h1>
          <h2>O SEU PORTAL DE RESPOSTAS</h2>
        </Header>
        <Body>
          <Input id="email" label="E-mail" type="email" />
          <Input id="password" label="Senha" type="password" />
          <Button>Entrar</Button>
          <a href="#">Ou clique aqui para se cadastrar</a>
        </Body>
      </FormLogin>
    </Container>
  );
}

export default Login;
