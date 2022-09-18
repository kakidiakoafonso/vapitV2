import React from "react";
import * as Styled from "./styled";
import { useNavigation } from "@react-navigation/native";
import ArrowBackIcon from "../../assets/icons/right-arrow.svg";
type Props = {
  title: String;
};
export function Header({ title }: Props) {
  const navigation = useNavigation();
  function handleBackClick() {
    navigation.goBack();
  }
  return (
    <Styled.Container>
      <Styled.ButtonContainer onPress={handleBackClick}>
        <ArrowBackIcon width={20} height={20} />
      </Styled.ButtonContainer>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
}
