import React from "react";
import { Header } from "../../components/header";
import { Loading } from "../../components/loader";
import * as Styled from "./styled";
import { useGetStops } from "../../hooks";
import { useRoute } from "@react-navigation/native";
import { StopCard } from "../../components/stop-card";

// import CustomAds from "../../components/InfoImage/BusImage";
// import { IAds, Directions } from "../../redux/Terminal/terminal.types";
// import { Parada } from "../../components/Parada/Parada";

export function Stop() {
  const { params } = useRoute();
  const { data, isLoading } = useGetStops(2);

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
              data={data}
              keyExtractor={(item: IStop) => String(item.id)}
              renderItem={({ item }: { item: IStop }) => (
                <StopCard stop={item} />
              )}
            />
          )}
        </Styled.ParadasListContainer>
      </Styled.Flex>

      {/* {data?.adverts && <CustomAds ads={data.adverts} />} */}
    </Styled.Container>
  );
}
