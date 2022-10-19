import React from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

import loadingAni from "../../assets/loading.json";

import * as S from "./styles";

import PostTweet from "../../components/PostTweet";
import Tweet from "../../components/Tweet";

import { UserContext } from "../../context/User";
import { TweetContext } from "../../context/Tweet";

const Home = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(true);

  const { user } = React.useContext(UserContext);
  const { tweets } = React.useContext(TweetContext);

  React.useEffect(() => {
    if (!user) {
      navigate("/account/login");
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <S.LoadingContainer>
        <Player
          autoplay
          loop
          src={loadingAni}
          style={{ width: 150, height: 150 }}
        />
      </S.LoadingContainer>
    );
  } else {
    return (
      <S.Container>
        <S.SideMenu>
          <S.Logo />
          <S.User>
            <S.Avatar />
            <S.Username>{user?.username}</S.Username>
          </S.User>
        </S.SideMenu>
        <S.Content>
          <PostTweet />
          {tweets.map((tweet) => {
            return <Tweet key={tweet.id} {...tweet} />;
          })}
        </S.Content>
        <S.Explorer>
          <S.Search>
            <Search color="#1DA1F2" size={30} />
            <S.SearchInput placeholder="Search" />
          </S.Search>
        </S.Explorer>
      </S.Container>
    );
  }
};

export default Home;
