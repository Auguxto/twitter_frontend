import { useContext, useState } from "react";

import { UserContext } from "../../../context/User";

import * as S from "./styles";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login } = useContext(UserContext);

  return (
    <S.Container>
      <S.Form>
        <S.Logo />
        <S.Inputs>
          <S.Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <S.Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.Button
            onClick={() => {
              login({ username, password });
            }}
          >
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
