import React from "react";
import { useNavigate } from "react-router-dom";

import api from "../lib/api";

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  bio: string | null;
  avatar: string | null;
  created_at: string;
  updated_at: string;
};

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

type UserContextT = {
  register: (props: RegisterT) => void;
  login: (props: LoginT) => void;
  access_token: string | undefined;
  user: User | undefined;
};

export const UserContext = React.createContext({} as UserContextT);

type UserProviderT = {
  children: React.ReactNode;
};

const UserProvider: React.FC<UserProviderT> = ({ children }) => {
  const [user, setUser] = React.useState<User | undefined>();
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

    const access_response = await api.post("/user/auth", props);

    if (access_response.status === 201) {
      set_access_token(access_response.data.access_token);

      const user_response = await api.get("/user", {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      });

      if (user_response.status === 200) {
        console.log(user_response.data);
        setUser(user_response.data);
      }

      navigate("/");
    }
  };

  return (
    <UserContext.Provider value={{ register, login, access_token, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
