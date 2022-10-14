import React from "react";
import * as Styled from "./styled";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../config/style/colors";
import { FlatList } from "react-native";

type Props = {
  modalStatus: boolean;
  way: String[];
  callback: (way: String) => void;
  closeModal: () => void;
};
export function WayFilterModal({
  callback,
  modalStatus,
  closeModal,
  way,
}: Props) {
  function handleSelected(way: String) {
    callback(way);
    closeModal();
  }
  return (
    <Styled.Container transparent animationType="slide" visible={modalStatus}>
      <Styled.DarkContainer activeOpacity={1} onPress={closeModal}>
        <Styled.ContentContainer>
          <Styled.CenterContainer>
            <Styled.TopContainer>
              <Styled.IconClose onPress={closeModal} activeOpacity={0.7}>
                <AntDesign
                  name="closecircle"
                  size={24}
                  color={colors.background.grey}
                />
              </Styled.IconClose>
            </Styled.TopContainer>

            <Styled.Table>
              <Styled.TableHeader>
                <Styled.HeaderRow>
                  <Styled.TextHeader>Filtrar por via</Styled.TextHeader>
                </Styled.HeaderRow>
              </Styled.TableHeader>

              <FlatList
                data={way}
                keyExtractor={(e) => String(e)}
                renderItem={({ item }) => (
                  <Styled.TableBody
                    activeOpacity={0.8}
                    onPress={() => handleSelected(item)}
                  >
                    <Styled.Row>
                      <Styled.TextRow>{item}</Styled.TextRow>
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
