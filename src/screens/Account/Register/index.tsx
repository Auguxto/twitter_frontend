import { useContext, useState } from "react";

import { UserContext } from "../../../context/User";

import * as S from "./styles";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { register } = useContext(UserContext);

  return (
    <S.Container>
      <S.Form>
        <S.Logo />
        <S.Inputs>
          <S.Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <S.Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <S.Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.Button
            onClick={() => {
              register({ name, username, email, password });
            }}
          >
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
