import React from "react";
import moment from "moment";
import { useContext } from "react";
import { Trash2 } from "lucide-react";

import * as S from "./styles";

import api from "../../lib/api";

import { UserContext } from "../../context/User";
import { TweetContext } from "../../context/Tweet";

import { Tweet as TweetT } from "../../types/twitter";

const Tweet: React.FC<TweetT> = (tweet) => {
  const now = moment();

  const { user, access_token, getUserInfo } = useContext(UserContext);
  const { setTweets } = useContext(TweetContext);

  const user_follow_tweet_author =
    user?.following.find((follow) => follow.following_id === tweet.user_id) &&
    tweet.user_id !== user?.id;

  const show_follow_button = tweet.user_id !== user?.id;

  const tweet_time_minutes = now.diff(tweet.created_at, "minutes");
  const tweet_time_hours = now.diff(tweet.created_at, "hours");
  const tweet_time_days = now.diff(tweet.created_at, "days");
  const tweet_time_weeks = now.diff(tweet.created_at, "weeks");

  const post_time =
    tweet_time_minutes >= 60
      ? tweet_time_hours >= 24
        ? tweet_time_days >= 31
          ? `${tweet_time_weeks}w`
          : `${tweet_time_days}d`
        : `${tweet_time_hours}h`
      : `${tweet_time_minutes}m`;

  const handleDeleteTweet = async (id: string) => {
    const response = await api.delete(`/tweet/${id}`, {
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 200) {
      setTweets((prev) => prev.filter((tweet) => tweet.id !== id));
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

  return (
    <S.Container key={tweet.id}>
      <S.Header>
        <S.User>
          <S.Avatar />
          <S.Username>{tweet.user.name}</S.Username>
          <S.Nick>@{tweet.user.username}</S.Nick>
          <S.Time>{post_time}</S.Time>
          {show_follow_button && (
            <S.FollowButton
              onClick={() => {
                if (user_follow_tweet_author) {
                  handleUnfollowUser(tweet.user_id);
                } else {
                  handleFollowUser(tweet.user_id);
                }
              }}
            >
              <S.FollowText>
                {user_follow_tweet_author ? "Unfollow" : "Follow"}
              </S.FollowText>
            </S.FollowButton>
          )}
        </S.User>
        {tweet.user_id === user?.id && (
          <S.DeleteButton
            onClick={() => {
              handleDeleteTweet(tweet.id);
            }}
          >
            <Trash2 color="#a4a2a2" size={30} />
          </S.DeleteButton>
        )}
      </S.Header>
      <S.Text>{tweet.text}</S.Text>
    </S.Container>
  );
};

export default Tweet;
