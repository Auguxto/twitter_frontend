export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  bio: string | null;
  avatar: string | null;
  followedBy: [
    {
      follower_id: string;
      following_id: string;
    }
  ];
  following: [
    {
      follower_id: string;
      following_id: string;
    }
  ];
  created_at: string;
  updated_at: string;
};

export type Post = {
  id: string;
  user_id: string;
  text: string;
  images: string[];
  created_at: string;
  updated_at: string;
  user: User;
};
