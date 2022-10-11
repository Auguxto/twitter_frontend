import * as S from "./styles";

const Login = () => {
  return (
    <S.Container>
      <S.Form>
        <S.Logo />
        <S.Inputs>
          <S.Input placeholder="Username" />
          <S.Input placeholder="Password" />
          <S.Button>
            <S.ButtonText>Login</S.ButtonText>
          </S.Button>
          <S.AccountButton to="/account/register">
            <S.AccountButtonText>Create account</S.AccountButtonText>
          </S.AccountButton>
        </S.Inputs>
      </S.Form>
    </S.Container>
  );
};

export default Login;
