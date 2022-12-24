import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Logo from "../../assets/icons/Welcome.svg";
import * as S from "./styled";
import * as SW from "../welcome/styled";

const LOGO_SIZE = 200;
export function Privacy() {
  const { navigate } = useNavigation();
  const handleContinue = () => navigate("welcome");
  return (
    <SW.Container>
      <S.Hero>
        <Logo width={LOGO_SIZE} height={LOGO_SIZE} />
        <S.Name>Vapit</S.Name>
        <S.Slogan>Seu aplicativo de transporte publico</S.Slogan>
      </S.Hero>

      <S.Main>

        <S.Privacy>
        <S.PolicyText>
          Ao clicar em "Começar" você concorda com os
        </S.PolicyText>
        <S.DescritionTextWrapper>
          <S.LinkButton>
            <S.LinkButtonText>Termos de Serviço</S.LinkButtonText>
          </S.LinkButton>
          <S.PolicyText>e a</S.PolicyText>
          <S.LinkButton>
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
