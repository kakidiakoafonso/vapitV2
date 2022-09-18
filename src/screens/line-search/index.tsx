import * as Styled from "./styled";
import React, { useEffect, useState } from "react";
import { Search } from "../../components/search";
import { useGetLines } from "../../hooks";
import { Loading } from "../../components/loader";
import { LineCard } from "../../components/line-card";

// import { ListRenderItem } from "react-native";
// import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
// import colors from "../../config/style/colors";
// import ShimmerCidades from "../../components/ShimmerCidade/Cidades";
// import CidadesComponent from "../../components/Cidades/Index";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { reducerState } from "../../redux/rootReducer";
// import { fetchCidade, ICidade } from "../../redux/Cidades/cidade.action";
// import Linha from "../../components/Linha/Linha";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { setOrigem } from "../../redux/Rota/rota.action";
// import { dispatchTerminais } from "../../redux/Terminal/terminal.dispatch";

export function SearchLine() {
  // const { params } = useRoute();
  const { data: lines, isLoading } = useGetLines(21);
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
          {isLoading ? (
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
