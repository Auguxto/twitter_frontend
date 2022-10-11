import * as S from "./styles";

const Register = () => {
  return (
    <S.Container>
      <S.Form>
        <S.Logo />
        <S.Inputs>
          <S.Input placeholder="Name" />
          <S.Input placeholder="Username" />
          <S.Input placeholder="Password" />
          <S.Button>
            <S.ButtonText>Register</S.ButtonText>
          </S.Button>
          <S.AccountButton to="/account/login">
            <S.AccountButtonText>Login account</S.AccountButtonText>
          </S.AccountButton>
        </S.Inputs>
      </S.Form>
    </S.Container>
  );
};

export default Register;
