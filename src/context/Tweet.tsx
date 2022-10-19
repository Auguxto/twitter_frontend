import React, { Dispatch, SetStateAction } from "react";

import api from "../lib/api";

import { UserContext } from "./User";

import { Tweet } from "../types/twitter";

type TweetContextT = {
  tweets: Tweet[];
  setTweets: Dispatch<SetStateAction<Tweet[]>>;
};

export const TweetContext = React.createContext({} as TweetContextT);

type TweetProviderT = {
  children: React.ReactNode;
};

const TweetProvider: React.FC<TweetProviderT> = ({ children }) => {
  const [tweets, setTweets] = React.useState<Tweet[]>([]);

  const { user, access_token } = React.useContext(UserContext);

  React.useEffect(() => {
    (async () => {
      if (user) {
        const { data } = await api.get("/tweet", {
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        });

        setTweets(data);
      }
    })();
  }, [user]);

  return (
    <TweetContext.Provider value={{ tweets, setTweets }}>
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
