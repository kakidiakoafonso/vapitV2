import React, { useEffect } from "react";
import * as Styled from "./styled";
import RightIcon from "../../assets/icons/left arrow.svg";
import MainIcon from "../../assets/icons/Welcome.svg";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
// import { useDispatch } from 'react-redux'
// import { dispatchWeather } from '../../redux/Weather/weather.dispacth'

export function Welcome() {
  // const dispatch =useDispatch()

  // useEffect(()=> dispatch(dispatchWeather()),[])
  const { navigate } = useNavigation();
  const press = () => {
    navigate("welcome2");
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
            <Styled.TextIntro>Tem os horários de</Styled.TextIntro>

            <Styled.TextIntro>
              <Styled.TextIntroBold> TODOS </Styled.TextIntroBold>
              os dias
            </Styled.TextIntro>
          </Styled.IntroContainer>

          <Styled.TextMessage>
            Nosso time trabalhou muito para
          </Styled.TextMessage>
          <Styled.TextMessage>
            pensar em um serviço perfeito para você
          </Styled.TextMessage>
        </Styled.Box>
      </Styled.CenterContainer>
      <Styled.IndicatorContainer>
        <Styled.IndicatorOn />
        <Styled.IndicatorOff />
        <Styled.IndicatorOff />
      </Styled.IndicatorContainer>
      <Styled.Button activeOpacity={0.9} onPress={press}>
        <Styled.TextButton>CONTINUAR</Styled.TextButton>
        <AntDesign name="arrowright" size={24} color="#fff" />
      </Styled.Button>
    </Styled.Container>
  );
}
