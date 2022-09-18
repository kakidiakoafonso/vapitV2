import React, { useRef, useState } from "react";
import * as Styled from "./styled";
import MainIcon from "../../assets/icons/WelcomeSecond.svg";
import { useNavigation } from "@react-navigation/native";
import RightIcon from "../../assets/icons/left arrow.svg";
import { AntDesign } from "@expo/vector-icons";

export function WelcomeSecond() {
  const { navigate } = useNavigation();
  const press = () => {
    navigate("welcome3");
  };
  return (
    <Styled.Container>
      <Styled.CenterContainer>
        <Styled.Box>
          <Styled.TextWelcome>Bem-vindo</Styled.TextWelcome>
          <Styled.SVGContainer>
            <MainIcon width={"100%"} height={"100%"} />
          </Styled.SVGContainer>

          <Styled.IntroContainer>
            <Styled.TextIntro>Nãp se atrapalhe nos</Styled.TextIntro>

            <Styled.TextIntroBold>HORÁRIOS</Styled.TextIntroBold>
          </Styled.IntroContainer>

          <Styled.TextMessage>
            Deixe que o nosso app cuide disso para você
          </Styled.TextMessage>
        </Styled.Box>
      </Styled.CenterContainer>
      <Styled.IndicatorContainer>
        <Styled.IndicatorOff />
        <Styled.IndicatorOn />
        <Styled.IndicatorOff />
      </Styled.IndicatorContainer>
      <Styled.Button activeOpacity={0.9} onPress={press}>
        <Styled.TextButton>CONTINUAR</Styled.TextButton>
        <AntDesign name="arrowright" size={24} color="#fff" />
      </Styled.Button>
    </Styled.Container>
  );
}
