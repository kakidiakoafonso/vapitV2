import styled from "styled-components/native";
import { Platform } from "react-native";

const android: boolean = Platform.OS == "android";

export const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${android ? "25px" : "0px"};
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const ButtonContainer = styled.TouchableOpacity`
  width: 80px;
  position: absolute;
  left: 2px;
  align-items: center;
  justify-content: center;
`;
