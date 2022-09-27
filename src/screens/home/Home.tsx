import React from "react";
import * as Styled from "./styled";
import { Entypo } from "@expo/vector-icons";
import { Banner } from "../../components/banner";
import { useNavigation, useRoute } from "@react-navigation/native";
import LocationIcon from "../../assets/icons/location pin.svg";
import SearchIcon from "../../assets/icons/search-r-2.svg";
import { News } from "../../components/news";
import { Loading } from "../../components/loader";
import { useGetLines } from "../../hooks";
import { LineCard } from "../../components/line-card";
import { Weather } from "../../components/weather";
import { useSelector } from "react-redux";
import { reducerState } from "../../redux/rootReducer";
import { Skeleton } from "moti/skeleton";

// import { dispatchTerminais } from "../../redux/Terminal/terminal.dispatch";
// import Linha from "../../components/Linha/Linha";
// import Noticias from "../../components/Noticias/Noticias";
// import Admob from "../../components/Admob/Admob";

export function Home() {
  const weather = useSelector<reducerState, IWeather>(
    (state) => state.weather.weather
  );
  const isWeatherLoading = useSelector<reducerState, boolean>(
    (state) => state.weather.loading
  );
  const navigation = useNavigation();
  const { params } = useRoute();
  const { url, cityId }: { url: Array<string>; cityId: Number } = params;
  const { data: lines, isLoading } = useGetLines(cityId);
  return (
    <Styled.Container>
      <Styled.Header>
        {/* <Styled.Menu>
          <Entypo name="menu" size={44} color="black" />
        </Styled.Menu> */}
        <Styled.LefContainer>
          <LocationIcon width={25} height={25} />
          {isWeatherLoading ? (
            <Skeleton height={20} width={100} colorMode="light" />
          ) : (
            <Styled.TextLocationname>{weather.name}</Styled.TextLocationname>
          )}
        </Styled.LefContainer>
      </Styled.Header>

      <Styled.Body showsVerticalScrollIndicator={false}>
        {url.length > 0 && <Banner data={url} />}

        <Styled.ScrollViewContainer>
          <Weather />
        </Styled.ScrollViewContainer>

        {/* <Admob/> */}

        <News />
        <Styled.InputContainer>
          <Styled.Input
            placeholder="Pesquisar cidade"
            onFocus={() => navigation.navigate("lineSearch")}
          />
          <Styled.SearchIcon>
            <SearchIcon width={25} height={25} />
          </Styled.SearchIcon>
        </Styled.InputContainer>

        <Styled.LinhasContainer>
          <Styled.UltimasLinhasText>
            Úlimas linhas consultadas
          </Styled.UltimasLinhasText>
          {isLoading ? (
            <>
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
            </>
          ) : (
            lines?.map((item) => <LineCard key={String(item.id)} line={item} />)
          )}
        </Styled.LinhasContainer>
      </Styled.Body>
    </Styled.Container>
  );
}
