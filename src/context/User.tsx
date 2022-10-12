import React from "react";
import { useNavigate } from "react-router-dom";

import api from "../lib/api";

type RegisterT = {
  name: string;
  username: string;
  email: string;
  password: string;
};

type LoginT = {
  username: string;
  password: string;
};

type LoginResponseT = {
  access_token: string;
};

type UserContextT = {
  register: (props: RegisterT) => void;
  login: (props: LoginT) => void;
  access_token: string | undefined;
};

export const UserContext = React.createContext({} as UserContextT);

type UserProviderT = {
  children: React.ReactNode;
};

const UserProvider: React.FC<UserProviderT> = ({ children }) => {
  const [access_token, set_access_token] = React.useState<string>();

  const navigate = useNavigate();

  const register = async (props: RegisterT) => {
    if (!props) return;

    const response = await api.post("/user", props);

    if (response.status === 201) {
      navigate("/account/login");
    }
  };

  const login = async (props: LoginT) => {
    if (!props) return;

    const response = await api.post("/user/auth", props);

    if (response.status === 201) {
      set_access_token(response.data.access_token);

      navigate("/");
    }
  };

  return (
    <UserContext.Provider value={{ register, login, access_token }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
