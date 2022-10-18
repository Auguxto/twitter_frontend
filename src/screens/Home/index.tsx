import React from "react";
import moment from "moment";
import { Search, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

import loadingAni from "../../assets/loading.json";

import * as S from "./styles";

import api from "../../lib/api";

import { UserContext } from "../../context/User";

import { Post } from "../../types/twitter";
import Tweet from "../../components/Tweet";

const Home = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [text, setText] = React.useState("");

  const { user, access_token, getUserInfo } = React.useContext(UserContext);

  const handleTweet = async () => {
    if (!text) return;

    const response = await api.post(
      "/post",
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
      setPosts((prev) => [response.data, ...prev]);
      setText("");
    }
  };

  const handleDeleteTweet = async (id: string) => {
    const response = await api.delete(`/post/${id}`, {
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 200) {
      setPosts((prev) => prev.filter((post) => post.id !== id));
    }
  };

  const handleFollowUser = async (target_id: string) => {
    const response = await api.post(
      `/user/follow/${target_id}`,
      {},
      {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (response.status === 201) {
      getUserInfo();
    }
  };

  const handleUnfollowUser = async (target_id: string) => {
    const response = await api.delete(`/user/follow/${target_id}`, {
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 200) {
      getUserInfo();
    }
  };

  const now = moment();

  React.useEffect(() => {
    if (!user) {
      navigate("/account/login");
    }
    setLoading(false);
  }, []);

  React.useEffect(() => {
    (async () => {
      if (user) {
        const { data } = await api.get("/post", {
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        });

        setPosts(data);
      }
    })();
  }, [user]);

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
          <S.PostTweet>
            <S.Title>Home</S.Title>
            <S.InputText
              placeholder="What’s happening!"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <S.Button onClick={handleTweet}>
              <S.ButtonText>Tweet</S.ButtonText>
            </S.Button>
          </S.PostTweet>
          {posts.map((post) => {
            return (
              <Tweet
                key={post.id}
                post={post}
                handleDeleteTweet={() => {
                  handleDeleteTweet(post.id);
                }}
              />
            );
          })}
        </S.Content>
        <S.Explorer>
          <S.Search>
            <Search color="#1DA1F2" size={30} />
            <S.SearchInput placeholder="Pesquisar" />
          </S.Search>
        </S.Explorer>
      </S.Container>
    );
  }
};

export default Home;
