import * as Styled from "./styled";
import React, { useState } from "react";
import { Search } from "../../components/search";
import { LineCard } from "../../components/line-card";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";

export function SearchLine() {
  const { params } = useRoute();
  const { data: lines }: { lines: ILine[] } = params;

  const [linhasAtuais, setlinhasAtuais] = useState<ILine[]>(lines || []);
  const handleSearch = (text: string) => {
    if (text) {
      const linhasFiltrada = lines.filter((linha) => {
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
          {linhasAtuais.map((item, index) => (
            <LineCard key={String(index)} line={item} />
          ))}
        </Styled.ListContainer>
      </Styled.BottomContainer>
    </Styled.Container>
  );
}
