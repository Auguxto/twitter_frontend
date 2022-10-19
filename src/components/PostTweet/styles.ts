import styled from "styled-components";

export const Container = styled.div`
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
