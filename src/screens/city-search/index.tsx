import * as Styled from "./styled";
import React, { useState } from "react";
import { Search } from "../../components/search";
import CityCard from "../../components/city-card";
import { useRoute } from "@react-navigation/native";

export function SearchCitie() {
  const { params } = useRoute();
  const { data }: { data: ICitie[] } = params;

  const [cidadesAtuais, setcidadesAtuais] = useState<ICitie[]>(data || []);
  const handleSearch = (text: string) => {
    if (text) {
      const cidadeFiltrada = data.filter((city) => {
        return city.name.toLowerCase().search(text.toLowerCase()) > -1;
      });
      setcidadesAtuais(cidadeFiltrada);
    }
    if (text === "") setcidadesAtuais(data);
  };

  return (
    <Styled.Container>
      <Search callback={handleSearch} />
      <Styled.BottomContainer>
        <Styled.ListContainer>
          <Styled.FlatList
            data={cidadesAtuais}
            keyExtractor={(item: any, index: number) => String(index)}
            alwaysBounceVertical={false}
            renderItem={({ item }: { item: ICitie }) => (
              <CityCard city={item} />
            )}
          />
        </Styled.ListContainer>
      </Styled.BottomContainer>
    </Styled.Container>
  );
}
