import React from "react";
import * as Styled from "./styled";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../config/style/colors";
import { FlatList, ScrollView } from "react-native";

type Props = {
  modalStatus: boolean;
  callback: (day: IDay) => void;
  closeModal: () => void;
};
export function DayFilterModal({ callback, modalStatus, closeModal }: Props) {
  return (
    <Styled.Container transparent animationType="slide" visible={modalStatus}>
      <Styled.DarkContainer activeOpacity={1} onPress={closeModal}>
        <Styled.ContentContainer>
          <Styled.CenterContainer>
            <Styled.TopContainer>
              <Styled.Text>Filtrar pelo dia da semana</Styled.Text>
              <Styled.IconClose onPress={closeModal} activeOpacity={0.7}>
                <AntDesign
                  name="closecircle"
                  size={24}
                  color={colors.background.grey}
                />
              </Styled.IconClose>
            </Styled.TopContainer>
            <Styled.ButtonContainer>
              <Styled.Button onPress={() => callback("Dia Útil")}>
                <Styled.TextButton>Dia de Útil</Styled.TextButton>
              </Styled.Button>
              <Styled.Button onPress={() => callback("Sábado")}>
                <Styled.TextButton>Sábado</Styled.TextButton>
              </Styled.Button>
              <Styled.Button onPress={() => callback("Domingos e Feriados")}>
                <Styled.TextButton>Domingo e Feriados</Styled.TextButton>
              </Styled.Button>
            </Styled.ButtonContainer>
          </Styled.CenterContainer>
        </Styled.ContentContainer>
      </Styled.DarkContainer>
    </Styled.Container>
  );
}
