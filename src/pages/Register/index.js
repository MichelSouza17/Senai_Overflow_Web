import { Container, FormLogin, Header, Body, Button } from "./styles";
import Input from "../../components/Input";
import { api } from "../../services/api";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import {} from "module";
import { signIn } from "../../services/security";
import Loading from "../../components/Loading";

function Register() {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const [student, setStudent] = useState({
    ra: "",
    name: "",
    email: "",
    password: "",
    validPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validPassword()) return alert("As senhas precisam ser iguais!");

    setIsLoading(true);

    try {
      const { ra, name, email, password } = student;
      const response = await api.post("/students", {
        ra,
        name,
        email,
        password,
      });

      signIn(response.data);

      setIsLoading(false);

      history.push("/home");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
      setIsLoading(false);
    }
  };

  const handleInput = (e) => {
    setStudent({ ...student, [e.target.id]: e.target.value });
  };

  const validPassword = () => student.password === student.validPassword;

  const buttonDisabled = () => {
    const { ra, name, email, password } = student;

    if (!ra || !name || !email || !password || !validPassword()) return true;

    return false;
  };

  return (
    <>
      {isLoading && <Loading />}
      <Container>
        <FormLogin onSubmit={handleSubmit}>
          <Header>
            <h1>BEM VINDO AO SENAI OVERFLOW</h1>
            <h2>INFORME OS SEUS DADOS</h2>
          </Header>
          <Body>
            <Input
              id="ra"
              label="RA"
              type="text"
              value={student.ra}
              handler={handleInput}
              required
            />
            <Input
              id="name"
              label="Nome"
              type="text"
              value={student.name}
              handler={handleInput}
              required
            />
            <Input
              id="email"
              label="E-mail"
              type="text"
              value={student.email}
              handler={handleInput}
              required
            />
            <Input
              id="password"
              label="Senha"
              type="password"
              value={student.password}
              handler={handleInput}
              required
            />
            <Input
              id="validPassword"
              label="Confirmar Senha"
              type="password"
              value={student.validPassword}
              handler={handleInput}
              onBlur={(e) => {
                if (!validPassword()) alert("As senhas precisam ser iguais");
                e.target.focus();
              }}
              required
            />
            <Button disabled={buttonDisabled()}>Entrar</Button>
            <Link to="/">Ou se já tem cadastro, clique para entrar</Link>
          </Body>
        </FormLogin>
      </Container>
    </>
  );
}

export default Register;
