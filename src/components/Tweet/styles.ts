import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: auto;

  flex-direction: column;

  background-color: #ffffff;

  border-radius: 5px;

  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;
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

export const DeleteButton = styled.button`
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;

  margin-right: 10px;

  background: transparent;

  border: none;

  cursor: pointer;
`;

export const Nick = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  color: #a3a3a3;
`;

export const Time = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  color: #a3a3a3;
`;

export const FollowButton = styled.span`
  align-items: center;
  justify-content: center;

  background: transparent;

  border: none;

  cursor: pointer;
`;

export const FollowText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  text-decoration: underline;

  color: #1da1f2;
`;

export const Text = styled.p`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #a4a2a2;

  width: 90%;

  margin-bottom: 30px;
`;
