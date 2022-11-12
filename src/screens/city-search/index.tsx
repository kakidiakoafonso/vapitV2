import * as Styled from "./styled";
import React, { useState } from "react";
import { Search } from "../../components/search";
import { useGetCities } from "../../hooks";
import CityCard from "../../components/city-card";
import { LoaderCity } from "../../components/loader";

export function SearchCitie() {
  const { data, isLoading } = useGetCities();

  const [cidadesAtuais, setcidadesAtuais] = useState<ICitie[]>(data || []);
  const handleSearch = (text: string) => {
    if (text) {
      const cidadeFiltrada = cidadesAtuais.filter((city) => {
        return city.name.toLowerCase().search(text.toLowerCase()) > -1;
      });
      setcidadesAtuais(cidadeFiltrada);
    }
    if (text === "" && data) setcidadesAtuais(data);
  };

  return (
    <Styled.Container>
      <Search callback={handleSearch} />
      <Styled.BottomContainer>
        <Styled.ListContainer>
          {isLoading ? (
            <>
              <LoaderCity />
              <LoaderCity />
              <LoaderCity />
              <LoaderCity />
              <LoaderCity />
              <LoaderCity />
            </>
          ) : (
            <Styled.FlatList
              data={cidadesAtuais}
              keyExtractor={(item: any, index: number) => String(index)}
              alwaysBounceVertical={false}
              renderItem={({ item }: { item: ICitie }) => (
                <CityCard city={item} />
              )}
            />
          )}
        </Styled.ListContainer>
      </Styled.BottomContainer>
    </Styled.Container>
  );
}
