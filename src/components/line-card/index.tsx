import React, { useState } from "react";
import * as Styled from "./styled";
import { AntDesign } from "@expo/vector-icons";
import BusIcon from "../../assets/icons/bus connection.svg";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "../alert";
import { useDispatch } from "react-redux";
import { setAdverts } from "../../redux/adverts";

type Props = {
  line: ILine;
};
export function LineCard({ line }: Props) {
  const dispacth = useDispatch();
  const navigation = useNavigation();
  const [showModal, setshowModal] = useState<boolean>(false);
  function handleLinhaClick() {
    navigation.navigate("stop", { lineId: line.id });
    dispacth(setAdverts(line.adverts));
  }
  let height = 70
  if(line.name.length > 30)
    height = 100
  
  return (
    <Styled.Container
      style={{ borderLeftWidth: 8,height}}
      activeOpacity={0.5}
      onPress={handleLinhaClick}
      color={line.color_of_bus}
    >
      <Styled.Flex>
        <Styled.ImageContainer>
          <BusIcon width={40} height={40} />
        </Styled.ImageContainer>
        <Styled.InfoContainer>
          <Styled.NumberText>{line.code}</Styled.NumberText>
          <Styled.BusContainer>
            <Styled.NomeLinhaText>
              {line.name}
            </Styled.NomeLinhaText>
          </Styled.BusContainer>
        </Styled.InfoContainer>
        <Styled.IconContainer>
          <AntDesign name="right" size={20} color={"#c7c7cc"} />
        </Styled.IconContainer>
      </Styled.Flex>
      <Alert
        closeModal={() => setshowModal(false)}
        isOpen={showModal}
        message="Linha sem paradas."
      />
    </Styled.Container>
  );
}
