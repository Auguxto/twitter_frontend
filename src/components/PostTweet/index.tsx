import React from "react";

import * as S from "./styles";

import api from "../../lib/api";

import { UserContext } from "../../context/User";
import { TweetContext } from "../../context/Tweet";

const PostTweet = () => {
  const [text, setText] = React.useState("");

  const { access_token } = React.useContext(UserContext);
  const { setTweets } = React.useContext(TweetContext);

  const handleTweet = async () => {
    if (!text) return;

    const response = await api.post(
      "/tweet",
      {
        text,
      },
      {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (response.status === 201) {
      setTweets((prev) => [response.data, ...prev]);
      setText("");
    }
  };

  return (
    <S.Container>
      <S.Title>Home</S.Title>
      <S.InputText
        placeholder="What’s happening!"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <S.Button onClick={handleTweet}>
        <S.ButtonText>Tweet</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default PostTweet;
