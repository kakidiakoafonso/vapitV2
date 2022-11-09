import React from "react";
import { Header } from "../../components/header";
import { Loading } from "../../components/loader";
import * as Styled from "./styled";
import { useGetStops } from "../../hooks";
import { useRoute } from "@react-navigation/native";
import { StopCard } from "../../components/stop-card";
import { FullTop } from "../../components/full-top";

export function Stop() {
  const { params } = useRoute();
  const { lineId }: { lineId: Number } = params;
  const { data, isLoading } = useGetStops(lineId);

  return (
    <Styled.Container>
      <Header title={"Sentidos"} />
      <Styled.MessageContainer>
        <Styled.Message>
          Selecione a parada que deseja saber os horários
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
                <StopCard stop={item} lineID={lineId} />
              )}
            />
          )}
        </Styled.ParadasListContainer>
      </Styled.Flex>

      <FullTop />
    </Styled.Container>
  );
}
