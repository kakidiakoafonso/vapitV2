import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import * as Linking from 'expo-linking';
import * as S from "./styled";
import * as SW from "../welcome/styled";

export function Privacy() {
  const { navigate } = useNavigation();
  const handleContinue = () => navigate("welcome");
  function seePrivacy() {
    Linking.openURL('https://app.politicadeprivacidade.agenciavapit.com.br/');
  }
  return (
    <SW.Container>
      <S.Hero>
        <S.Logo source={require('../../assets/img/logo-vapit-hora-do-onibus.png')} resizeMethod='resize' resizeMode="contain"
        />
        <S.Slogan>Seu aplicativo de transporte publico</S.Slogan>
      </S.Hero>

      <S.Main>

        <S.Privacy>
        <S.PolicyText>
          Ao clicar em "Começar" você concorda com os
        </S.PolicyText>
        <S.DescritionTextWrapper>
          <S.LinkButton activeOpacity={0.7} onPress={seePrivacy}>
            <S.LinkButtonText>Termos de Serviço</S.LinkButtonText>
          </S.LinkButton>
          <S.PolicyText>e a</S.PolicyText>
          <S.LinkButton activeOpacity={0.7} onPress={seePrivacy}>
            <S.LinkButtonText>Política de Privacidade.</S.LinkButtonText>
          </S.LinkButton>
        </S.DescritionTextWrapper>
        </S.Privacy>


        <S.DescritionText>
          Para personalizar nossos serviços para você, o Vapit também coleta
          informações de localização quando você não está utilizando o
          aplicativo. Você pode editar suas preferências aqui.
        </S.DescritionText>
        <S.DescritionText>
          O Vapit precisa saber a sua localização para detectar automaticamente
          a cidade onde você se encontra e fornecer direções exatas com horários
          de chegada precisos para as linhas de transporte ao seu redor.
        </S.DescritionText>

        <SW.Button activeOpacity={0.9} onPress={handleContinue}>
          <SW.TextButton>Começar</SW.TextButton>
          <AntDesign name="arrowright" size={24} color="#fff" />
        </SW.Button>
      </S.Main>
    </SW.Container>
  );
}
