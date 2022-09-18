import React from "react";
import * as Styled from "./styled";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BusIcon from "../../assets/icons/location bus.svg";

type Props = {
  stop: IStop;
};
export function StopCard({ stop }: Props) {
  const navigation = useNavigation();
  let textFontSize = 15;
  const currentFont = 20; //stop.terminal.length

  if (currentFont > 30) textFontSize = 14;
  if (currentFont > 35) textFontSize = 12;

  function handleLinhaClick() {
    navigation.navigate("schedule", {
      schedules: stop.schedules,
    });
  }
  return (
    <Styled.Container activeOpacity={0.5} onPress={handleLinhaClick}>
      <Styled.Flex>
        <Styled.ImageContainer>
          <BusIcon width={40} height={40} />
        </Styled.ImageContainer>
        <Styled.InfoContainer>
          <Styled.BusContainer>
            <Styled.NomeLinhaText size={textFontSize}>
              {stop.direction}
            </Styled.NomeLinhaText>
            <Styled.SentidoText>{stop.bus_stop_type}</Styled.SentidoText>
          </Styled.BusContainer>
        </Styled.InfoContainer>

        <Styled.IconContainer>
          <AntDesign name="right" size={20} color={"#ccc"} />
        </Styled.IconContainer>
      </Styled.Flex>
    </Styled.Container>
  );
}
