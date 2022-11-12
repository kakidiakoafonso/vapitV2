import React, { useState } from "react";
import colors from "../../config/style/colors";
import * as Styled from "./styled";
import { AntDesign } from "@expo/vector-icons";
import BusIcon from "../../assets/icons/bus connection.svg";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "../alert";
import { useDispatch } from "react-redux";
import { setAdverts } from "../../redux/adverts";
// import Error from "../../components/Error/Error";

type Props = {
  line: ILine;
};
export function LineCard({ line }: Props) {
  const dispacth = useDispatch();
  const navigation = useNavigation();
  const [showModal, setshowModal] = useState<boolean>(false);
  //   const { bus_stops } = linha;
  //   const thereIsNoBus: boolean = linha.bus_stops.length === 0;
  function handleLinhaClick() {
    // if (thereIsNoBus) setshowModal(true);
    // else navigation.navigate("Paradas", { bus_stops });
    navigation.navigate("stop", { lineId: line.id });
    dispacth(setAdverts(line.adverts));
  }
  return (
    <Styled.Container
      style={{ borderLeftWidth: 8 }}
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
