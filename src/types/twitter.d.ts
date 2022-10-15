export type Post = {
  id: string;
  user_id: string;
  text: string;
  images: string[];
  created_at: string;
  updated_at: string;
  user: {
    id: string;
    username: string;
    name: string;
    avatar: string | null;
  };
};
