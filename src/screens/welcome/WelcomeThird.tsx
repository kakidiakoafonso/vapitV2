import React, { useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Styled from "./styled";
import MainIcon from "../../assets/icons/WelcomeThird.svg";
import { useNavigation } from "@react-navigation/native";
import RightIcon from "../../assets/icons/left arrow.svg";
import { AntDesign } from "@expo/vector-icons";

export function WelcomeThird() {
  const { navigate } = useNavigation();
  async function press() {
    try {
      await AsyncStorage.setItem("@vapit", "true");
    } catch (e) {
      console.log(e);
    } finally {
      navigate("city");
    }
  }
  return (
    <Styled.Container>
      <Styled.CenterContainer>
        <Styled.Box>
          <Styled.TextWelcome>Bem-vindo</Styled.TextWelcome>
          <Styled.SVGContainer>
            <MainIcon width={"100%"} height={"100%"} />
          </Styled.SVGContainer>

          <Styled.IntroContainer>
            <Styled.TextIntro>
              Muito
              <Styled.TextIntroBold> SIMPLES </Styled.TextIntroBold>
              de
            </Styled.TextIntro>

            <Styled.TextIntro>consultar</Styled.TextIntro>
          </Styled.IntroContainer>

          <Styled.TextMessage>
            Deixe que o nosso app cuide disso para você
          </Styled.TextMessage>
        </Styled.Box>
      </Styled.CenterContainer>
      <Styled.IndicatorContainer>
        <Styled.IndicatorOff />
        <Styled.IndicatorOff />
        <Styled.IndicatorOn />
      </Styled.IndicatorContainer>
      <Styled.Button activeOpacity={0.9} onPress={press}>
        <Styled.TextButton>CONTINUAR</Styled.TextButton>
        <AntDesign name="arrowright" size={24} color="#fff" />
      </Styled.Button>
    </Styled.Container>
  );
}
