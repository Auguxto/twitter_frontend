import styled from "styled-components";

import logoImg from "../../assets/twitter.svg";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  flex-direction: row;

  background-color: #1da1f2;
`;

export const SideMenu = styled.div`
  display: flex;
  width: 20%;
  min-width: 384px;
  height: 100vh;

  flex-direction: column;

  background-color: #ffffff;

  border-radius: 0px 5px 5px 0px;
`;

export const User = styled.div`
  display: flex;

  flex-direction: row;

  align-items: center;

  gap: 10px;

  margin: 20px;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;

  background-color: #d9d9d9;

  border-radius: 25px;
`;

export const Username = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  color: #000000;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;

  flex-direction: column;

  gap: 40px;

  padding: 40px;
`;

export const PostTweet = styled.div`
  display: flex;
  height: 210px;

  flex-direction: column;

  background-color: #ffffff;

  border-radius: 5px;

  padding: 10px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 25px;

  color: #2c2c2c;
`;

export const InputText = styled.textarea`
  width: 100%;
  flex: 1;

  resize: none;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #a4a2a2;

  border: none;

  margin-top: 20px;
`;

export const Button = styled.button`
  width: 90px;
  height: 40px;

  align-self: flex-end;

  align-items: center;
  justify-content: center;

  background-color: #1da1f2;

  border-radius: 25px;

  border: none;

  cursor: pointer;
`;

export const ButtonText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  color: #ffffff;
`;

export const Explorer = styled.div`
  display: flex;
  width: 22%;
  min-width: 422px;
  height: 100vh;

  padding-top: 40px;
  padding-left: 40px;
`;

export const Logo = styled.img.attrs({
  src: logoImg,
})`
  width: 100px;
  height: 100px;

  align-self: center;

  margin-top: 40px;
`;
