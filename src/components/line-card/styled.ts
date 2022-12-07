import styled from "styled-components/native";
import colors from "../../config/style/colors";

type Props = {
  color: string;
};
export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  background-color: ${colors.background.grey80};
  border: 0px solid ${({ color }) => color};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-bottom: 12px;
`;
export const Flex = styled.View`
  padding: 14px 0;
  flex: 1;
  padding-left: 3%;
  align-items: center;
  flex-direction: row;
`;
export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
export const InfoContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;
export const NumberText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
`;
export const BusContainer = styled.View`
  width: 80%;
`;
export const NomeLinhaText = styled.Text`
  font-weight: bold;
`;
export const SentidoText = styled.Text`
  color: ${colors.text.dark};
  font-size: 11px;
  opacity: 0.6;
`;
export const IconContainer = styled.View`
  position: absolute;
  right: 5px;
`;