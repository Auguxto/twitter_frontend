import React from "react";
import moment from "moment";
import { useContext } from "react";
import { Trash2 } from "lucide-react";

import * as S from "./styles";

import api from "../../lib/api";

import { UserContext } from "../../context/User";

import { Post } from "../../types/twitter";

type TweetProps = {
  post: Post;
  handleDeleteTweet: (id: string) => void;
};

const Tweet: React.FC<TweetProps> = ({ post, handleDeleteTweet }) => {
  const now = moment();

  const { user, access_token, getUserInfo } = useContext(UserContext);

  const user_follow_post_author =
    user?.following.find((follow) => follow.following_id === post.user_id) &&
    post.user_id !== user?.id;

  const show_follow_button = post.user_id !== user?.id;

  const post_time_minutes = now.diff(post.created_at, "minutes");
  const post_time_hours = now.diff(post.created_at, "hours");
  const post_time_days = now.diff(post.created_at, "days");
  const post_time_weeks = now.diff(post.created_at, "weeks");

  const post_time =
    post_time_minutes >= 60
      ? post_time_hours >= 24
        ? post_time_days >= 31
          ? `${post_time_weeks}w`
          : `${post_time_days}d`
        : `${post_time_hours}h`
      : `${post_time_minutes}m`;

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
    <S.Container key={post.id}>
      <S.Header>
        <S.User>
          <S.Avatar />
          <S.Username>{post.user.name}</S.Username>
          <S.Nick>@{post.user.username}</S.Nick>
          <S.Time>{post_time}</S.Time>
          {show_follow_button && (
            <S.FollowButton
              onClick={() => {
                if (user_follow_post_author) {
                  handleUnfollowUser(post.user_id);
                } else {
                  handleFollowUser(post.user_id);
                }
              }}
            >
              <S.FollowText>
                {user_follow_post_author ? "Unfollow" : "Follow"}
              </S.FollowText>
            </S.FollowButton>
          )}
        </S.User>
        {post.user_id === user?.id && (
          <S.DeleteButton
            onClick={() => {
              handleDeleteTweet(post.id);
            }}
          >
            <Trash2 color="#a4a2a2" size={30} />
          </S.DeleteButton>
        )}
      </S.Header>
      <S.Text>{post.text}</S.Text>
    </S.Container>
  );
};

export default Tweet;
