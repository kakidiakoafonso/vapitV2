import React from "react";
import { Header } from "../../components/header";
import { Loading } from "../../components/loader";
import * as Styled from "./styled";
import { useGetStops } from "../../hooks";
import { useRoute } from "@react-navigation/native";
import { StopCard } from "../../components/stop-card";
import { Adverts } from "../../components/adverts";
import { useSelector } from "react-redux";
import { reducerState } from "../../redux/rootReducer";

// import CustomAds from "../../components/InfoImage/BusImage";
// import { IAds, Directions } from "../../redux/Terminal/terminal.types";
// import { Parada } from "../../components/Parada/Parada";

export function Stop() {
  const { params } = useRoute();
  const { lineId }: { lineId: Number } = params;
  const { data, isLoading } = useGetStops(lineId);
  const adverts = useSelector<reducerState, IAdverts[]>((state) =>
    state.adverts.filter((e) => e.height <= 50)
  );

  return (
    <Styled.Container>
      <Header title={"Sentidos"} />
      <Styled.MessageContainer>
        <Styled.Message>
          Seleciona a parada que deseja saber os horários
        </Styled.Message>
      </Styled.MessageContainer>

      <Styled.Flex>
        <Styled.ParadasListContainer>
          {isLoading ? (
            <>
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
            </>
          ) : (
            <Styled.ParadasList
              showsVerticalScrollIndicator={false}
              data={data}
              keyExtractor={(item: IStop) => String(item.id)}
              renderItem={({ item }: { item: IStop }) => (
                <StopCard stop={item} />
              )}
            />
          )}
        </Styled.ParadasListContainer>
      </Styled.Flex>

      <Adverts adverts={adverts} />
    </Styled.Container>
  );
}
