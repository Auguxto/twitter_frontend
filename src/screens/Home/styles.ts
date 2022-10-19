import styled from "styled-components";

import logoImg from "../../assets/twitter.svg";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  flex-direction: row;

  background-color: #1da1f2;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex: 1;

  width: 100%;
  height: 100vh;

  align-items: center;
  justify-content: center;

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

export const Follows = styled.div`
  display: flex;

  gap: 10px;

  margin-left: 20px;
`;

export const FollowText = styled.span`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #2c2c2c;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;

  flex-direction: column;

  gap: 40px;

  padding: 40px 20px 40px 40px;

  overflow-y: scroll;
`;

export const Explorer = styled.div`
  display: flex;
  width: 22%;
  min-width: 422px;
  height: 100vh;

  margin-right: 40px;
  padding-top: 40px;
`;

export const Search = styled.div`
  display: flex;

  width: 100%;
  height: 60px;

  align-items: center;

  padding-left: 20px;
  margin-left: 20px;

  background: #ffffff;
  border-radius: 30px;

  overflow: hidden;
`;

export const SearchInput = styled.input`
  display: flex;
  flex: 1;
  height: 100%;

  padding: 0 10px;

  border: none;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  color: #1da1f2;

  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;

    color: #1da1f2;
  }
`;

export const Logo = styled.img.attrs({
  src: logoImg,
})`
  width: 100px;
  height: 100px;

  align-self: center;

  margin-top: 40px;
`;
