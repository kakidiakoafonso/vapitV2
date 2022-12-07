import styled from "styled-components/native";
import colors from "../../config/style/colors";

export const Container = styled.TouchableOpacity`
  width: 100%;
  /* height: 70px; AQUI */
  margin-bottom: 12px;
`;
export const Flex = styled.View`
  flex: 1;
  background-color: ${colors.background.grey80};
  /* padding-left: 3%; AQUI */
  padding: 14px 10px;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
`;
export const ImageContainer = styled.View`
  /* width: 80px; */
  /* height: 80px; */
  /* background-color:yellow ; */
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
export const InfoContainer = styled.View`
  /* width: 0%; */
  /* height: 100px; */
  flex: 1;
  /* background-color:aqua; */
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const NumberText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;
export const BusContainer = styled.View`
  /* height: 40px;  AQUI */
  justify-content: space-between;
  /* align-items:flex-start ; */
`;
type NomeLinhaTextProps = { size: number };
export const NomeLinhaText = styled.Text<NomeLinhaTextProps>`
  font-weight: bold;
  font-size: ${(Props) => Props.size + "px"};
`;
export const SentidoText = styled.Text`
  color: ${colors.text.dark};
  font-size: 13px;
  opacity: 0.6;
`;
export const IconContainer = styled.View`
  /* position:absolute;
right:7px; */
`;

// export const Container = styled.View``
// export const Container = styled.View``
