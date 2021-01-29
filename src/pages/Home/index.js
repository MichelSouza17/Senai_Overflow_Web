import {
  Container,
  Header,
  Content,
  ProfileContainer,
  FeedContainer,
  ActionsContainer,
  QuestionCard,
} from "./styles";

import imgProfile from "../../assets/foto_perfil.png";

function Profile() {
  return (
    <>
      <section>
        <img src={imgProfile} />
        <a href="#" />
      </section>
      <section>
        <strong>Nome:</strong>
        <p>Fulano de Tal</p>
      </section>
      <section>
        <strong>RA:</strong>
        <p>12345678</p>
      </section>
      <section>
        <strong>E-MAIL:</strong>
        <p>Fulano@gmail.com</p>
      </section>
    </>
  );
}

function Home() {
  return (
    <Container>
      <Header></Header>
      <Content>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <FeedContainer>
          <QuestionCard>
            <header>
              <img src={imgProfile} />
              <strong>por Ciclano da Silva</strong>
              <p>em 12/12/2012 as 12:12</p>
            </header>
            <section>
              <strong>Titulo</strong>
              <p>Descrição</p>
              <img src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"></img>
            </section>
            <footer></footer>
          </QuestionCard>
        </FeedContainer>
        <ActionsContainer>
          <button>Fazer uma pergunta</button>
        </ActionsContainer>
      </Content>
    </Container>
  );
}

export default Home;
