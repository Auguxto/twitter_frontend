import { Search } from "lucide-react";

import * as S from "./styles";

const Home = () => {
  return (
    <S.Container>
      <S.SideMenu>
        <S.Logo />
        <S.User>
          <S.Avatar />
          <S.Username>Username</S.Username>
        </S.User>
      </S.SideMenu>
      <S.Content>
        <S.PostTweet>
          <S.Title>Home</S.Title>
          <S.InputText placeholder="What’s happening!" />
          <S.Button>
            <S.ButtonText>Tweet</S.ButtonText>
          </S.Button>
        </S.PostTweet>
        <S.Tweet>
          <S.User>
            <S.Avatar />
            <S.Username>Name</S.Username>
            <S.Nick>@username</S.Nick>
            <S.Time>10m</S.Time>
          </S.User>
          <S.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            dignissimos eum temporibus maiores cumque laudantium odio suscipit,
            cupiditate, enim error at saepe voluptas consequuntur voluptates id,
            obcaecati adipisci ratione reprehenderit.
          </S.Text>
        </S.Tweet>
      </S.Content>
      <S.Explorer>
        <S.Search>
          <Search color="#1DA1F2" size={30} />
          <S.SearchInput placeholder="Pesquisar" />
        </S.Search>
      </S.Explorer>
    </S.Container>
  );
};

export default Home;
