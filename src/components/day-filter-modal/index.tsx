import React from "react";
import * as Styled from "./styled";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../config/style/colors";
import { FlatList, ScrollView } from "react-native";

type Props = {
  modalStatus: boolean;
  way: String[];
  callback: (day: IDay) => void;
  closeModal: () => void;
};
export function DayFilterModal({
  callback,
  modalStatus,
  closeModal,
  way,
}: Props) {
  return (
    <Styled.Container transparent animationType="slide" visible={modalStatus}>
      <Styled.DarkContainer activeOpacity={1}>
        {/* onPress={closeModal} */}
        <Styled.ContentContainer>
          <Styled.CenterContainer>
            <Styled.TopContainer>
              {/* <Styled.TextMessageEspecial>
                Essa linha pode estar operando com horários especiais.
              </Styled.TextMessageEspecial> */}

              <Styled.IconClose onPress={closeModal} activeOpacity={0.7}>
                <AntDesign
                  name="closecircle"
                  size={24}
                  color={colors.background.grey}
                />
              </Styled.IconClose>
            </Styled.TopContainer>

            {/* <Styled.TextCovidMessage>
              Funcionamento geral do transporte coletivo durante o período de
              quarentena contra a proliferação do COVID-19
            </Styled.TextCovidMessage> */}

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

            <Styled.Table>
              <Styled.TableHeader>
                <Styled.HeaderRow>
                  <Styled.TextHeader>Filtrar por via</Styled.TextHeader>
                </Styled.HeaderRow>
              </Styled.TableHeader>

              <FlatList
                data={way}
                keyExtractor={(e) => String(e)}
                renderItem={() => (
                  <Styled.TableBody>
                    <Styled.Row>
                      <Styled.TextRow>{way}</Styled.TextRow>
                    </Styled.Row>
                  </Styled.TableBody>
                )}
              />
            </Styled.Table>
          </Styled.CenterContainer>
        </Styled.ContentContainer>
      </Styled.DarkContainer>
    </Styled.Container>
  );
}
