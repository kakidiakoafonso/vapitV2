import React from "react";
import * as Styled from "./styled";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../config/style/colors";

type Props = {
  modalStatus: boolean;
  callback: (day: IDay) => void;
  closeModal: () => void;
};
export function DayFilterModal({ callback, modalStatus, closeModal }: Props) {
  return (
    <Styled.Container transparent animationType="slide" visible={modalStatus}>
      <Styled.DarkContainer onPress={closeModal} activeOpacity={1}>
        <Styled.ContentContainer>
          <Styled.CenterContainer>
            <Styled.TopContainer>
              <Styled.TextMessageEspecial>
                Essa linha pode estar operando com horários especiais.
              </Styled.TextMessageEspecial>

              <Styled.IconClose onPress={closeModal} activeOpacity={0.7}>
                <AntDesign
                  name="closecircle"
                  size={24}
                  color={colors.background.grey}
                />
              </Styled.IconClose>
            </Styled.TopContainer>

            <Styled.TextCovidMessage>
              Funcionamento geral do transporte coletivo durante o período de
              quarentena contra a proliferação do COVID-19
            </Styled.TextCovidMessage>

            <Styled.Table>
              <Styled.TableHeader>
                <Styled.HeaderRow>
                  <Styled.TextHeader>Dia da semana</Styled.TextHeader>
                </Styled.HeaderRow>
                <Styled.HeaderRow>
                  <Styled.TextHeader>Dia da semana</Styled.TextHeader>
                </Styled.HeaderRow>
              </Styled.TableHeader>

              <Styled.TableBody>
                <Styled.Row>
                  <Styled.TextRow>Segunda a sexta</Styled.TextRow>
                </Styled.Row>
                <Styled.RowSeparator />
                <Styled.Row>
                  <Styled.TextRow>Sabado</Styled.TextRow>
                </Styled.Row>
              </Styled.TableBody>

              <Styled.TableBody>
                <Styled.Row>
                  <Styled.TextRow>Segunda e Domingo</Styled.TextRow>
                </Styled.Row>
                <Styled.RowSeparator />
                <Styled.Row>
                  <Styled.TextRow>Domingo</Styled.TextRow>
                </Styled.Row>
              </Styled.TableBody>
            </Styled.Table>

            <Styled.ButtonContainer>
              <Styled.Button onPress={() => callback("Sábado")}>
                <Styled.TextButton>Sábado</Styled.TextButton>
              </Styled.Button>
              <Styled.Button onPress={() => callback("Domingos e Feriados")}>
                <Styled.TextButton>Domingo e Feriados</Styled.TextButton>
              </Styled.Button>
              <Styled.Button onPress={() => callback("Dia Útil")}>
                <Styled.TextButton>Dia de Útil</Styled.TextButton>
              </Styled.Button>
            </Styled.ButtonContainer>
          </Styled.CenterContainer>
        </Styled.ContentContainer>
      </Styled.DarkContainer>
    </Styled.Container>
  );
}
