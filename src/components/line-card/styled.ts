import styled from "styled-components/native";
import colors from "../../config/style/colors";

type Props = {
  color: string;
};
export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 70px;
  background-color: ${colors.background.grey70};
  border: 0px solid ${({ color }) => color};
  /* border: 0px solid ${colors.background.green}; */
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-bottom: 12px;
`;
export const Flex = styled.View`
  flex: 1;
  background-color: ${colors.background.grey80};
  padding-left: 3%;
  /* justify-content:space-between; */
  align-items: center;
  flex-direction: row;
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
  /* width: 100px; */
  height: 100px;
  /* background-color:aqua; */
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const NumberText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
`;
export const BusContainer = styled.View`
  /* background-color:red; */
  height: 40px;
  justify-content: center;
  align-items: center;
`;
type NomeLinhaTextProps = {
  size: number;
};
export const NomeLinhaText = styled.Text<NomeLinhaTextProps>`
  font-weight: bold;
  font-size: ${(props) => props.size + `px`};
  width: 100%;
  /* background-color:yellow ; */
`;
export const SentidoText = styled.Text`
  color: ${colors.text.dark};
  font-size: 11px;
  opacity: 0.6;
`;
export const IconContainer = styled.View`
  position: absolute;
  right: 7px;
`;

// export const Container = styled.View``
// export const Container = styled.View``
