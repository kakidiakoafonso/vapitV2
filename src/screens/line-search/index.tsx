import * as Styled from "./styled";
import React, { useEffect, useState } from "react";
import { Search } from "../../components/search";
import { useGetLines } from "../../hooks";
import { Loading } from "../../components/loader";
import { LineCard } from "../../components/line-card";
import { useRoute } from "@react-navigation/native";

export function SearchLine() {
  const { params } = useRoute();
  const { cityId }: { cityId: Number } = params;

  const { data: lines, isLoading ,isFetching} = useGetLines(cityId);
  const [linhasAtuais, setlinhasAtuais] = useState<ILine[]>(lines || []);
  const handleSearch = (text: string) => {
    if (text) {
      const linhasFiltrada = linhasAtuais.filter((linha) => {
        return linha.name.toLowerCase().search(text.toLowerCase()) > -1;
      });
      setlinhasAtuais(linhasFiltrada);
    }
    if (text === "") setlinhasAtuais(lines || []);
  };

  return (
    <Styled.Container>
      <Search callback={handleSearch} />
      <Styled.BottomContainer>
        <Styled.LabelContainer>
          <Styled.Label>Linhas de Ônibus </Styled.Label>
        </Styled.LabelContainer>
        <Styled.ListContainer>
          {isLoading || isFetching ? (
            <>
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
            </>
          ) : (
            linhasAtuais.map((item) => (
              <LineCard key={String(item.id)} line={item} />
            ))
          )}
        </Styled.ListContainer>
      </Styled.BottomContainer>
    </Styled.Container>
  );
}
