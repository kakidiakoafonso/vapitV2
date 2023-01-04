import React from "react";
import * as Styled from "./styled";
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
import { EmptyAnimation } from "../../components/empty";

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
  const { data: linesFetched, isLoading, isFetching } = useGetLines(cityId);
  const isEmpty = linesFetched != undefined && linesFetched?.length===0
  const lines: ILine[] = linesFetched != undefined ? linesFetched.sort(function(a, b){return Number(a.code) - Number(b.code)}) :[]


  function handeOnFocus() {
    if (!isLoading && lines) {
      if (lines.length > 0)
        navigation.navigate("lineSearch", {
          data: lines,
        });
    }
  }
  return (
    <Styled.Container>
      <Styled.Header>
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

        <News />
        <Styled.InputContainer>
          <Styled.Input
            placeholder="Pesquisar linha"
            onFocus={handeOnFocus}
            editable={lines?.length > 0}
          />
          <Styled.SearchIcon>
            <SearchIcon width={25} height={25} />
          </Styled.SearchIcon>
        </Styled.InputContainer>

        <Styled.LinhasContainer>
          <Styled.UltimasLinhasText>
            {isEmpty ? "Linhas indisponíveis":"Linhas disponíveis"}
          </Styled.UltimasLinhasText>
          {isLoading || isFetching ? (
            <>
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
            </>
          ) : lines?.length === 0 ? (
            <EmptyAnimation message={"Não existe linhas disponiveis"} />
          ) : (
            lines.map((item) => <LineCard key={String(item.id)} line={item} />)
          )}
        </Styled.LinhasContainer>
      </Styled.Body>
    </Styled.Container>
  );
}
