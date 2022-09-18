import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("screen");
const cardWidthSize = width * 0.7;
const cardHeightSize = width * 0.5;

export const Modal = styled.Modal``;
export const Container = styled.TouchableOpacity`
  flex: 1;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;
type Props = {
  error?: boolean;
};
export const Card = styled.View<Props>`
  width: ${cardWidthSize + "px"};
  height: ${cardHeightSize + "px"};
  background-color: ${(props) => (props.error ? "#cc3300" : "#ff9966")};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 25px;
  margin-top: 2%;
  margin-bottom: 10px;
`;
export const Message = styled.Text`
  color: #fff;
  font-size: 13px;
`;
