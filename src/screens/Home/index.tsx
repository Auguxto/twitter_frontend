import * as S from "./styles";

const Home = () => {
  return (
    <S.Container>
      <S.SideMenu>
        <S.Logo />
        <S.User>
          <S.Avatar />
          <S.Username>Username</S.Username>
        </S.User>
      </S.SideMenu>
      <S.Content>
        <S.PostTweet>
          <S.Title>Home</S.Title>
          <S.InputText>What’s happening!</S.InputText>
          <S.Button>
            <S.ButtonText>Tweet</S.ButtonText>
          </S.Button>
        </S.PostTweet>
      </S.Content>
      <S.Explorer>
        <span>Explorer</span>
      </S.Explorer>
    </S.Container>
  );
};

export default Home;
