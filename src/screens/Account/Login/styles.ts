import styled from "styled-components";
import { Link } from "react-router-dom";

import logoImg from "../../../assets/twitter.svg";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  align-items: center;
  justify-content: center;

  background-color: #1da1f2;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  width: 30%;
  height: 60%;

  align-items: center;

  background-color: #ffffff;

  border-radius: 5px;
`;

export const Logo = styled.img.attrs({
  src: logoImg,
})`
  width: 100px;
  height: 100px;

  margin-top: 40px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  align-items: center;

  margin-top: 50px;
`;

export const Input = styled.input`
  width: 80%;
  height: 50px;

  border-radius: 10px;
  border: 2px solid #1da1f2;

  padding-left: 10px;
  margin-top: 20px;

  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #1da1f2;

  ::placeholder {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: #1da1f2;
  }
`;

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 80%;
  height: 50px;

  background-color: #1da1f2;

  border-radius: 10px;
  border: none;

  margin-top: 20px;

  cursor: pointer;
`;

export const ButtonText = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 25px;

  color: #ffffff;
`;

export const AccountButton = styled(Link)`
  background-color: transparent;

  border: none;

  margin-top: 10px;

  cursor: pointer;
`;

export const AccountButtonText = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  color: #2c2c2c;
`;
