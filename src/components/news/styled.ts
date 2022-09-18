import { Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from "../../config/style/colors";

const { width } = Dimensions.get("screen");
const screenWidht = width * 0.9;
export const Wrapper = styled.TouchableOpacity`
  width: ${screenWidht + "px"};
  height: 200px;
  align-self: center;
  margin-right: 10px;
`;
export const FlatList = styled.FlatList``;
export const Container = styled.View`
  width: ${screenWidht + "px"};
  height: 240px;
  align-self: center;
  margin-bottom: 10px;
`;
export const Titulo = styled.Text`
  margin-bottom: 7px;
  font-weight: bold;
  font-size: 17px;
`;
export const Image = styled.ImageBackground`
  flex: 1;
  border-radius: 10px;
  /* align-items:flex-end ; */
  justify-content: flex-end;
`;
export const Detalhes = styled.View`
  width: 100%;
  height: 60px;
  padding-left: 10px;
  justify-content: space-evenly;
`;
export const WrapperTextDetalhe = styled.Text`
  color: ${colors.background.white};
  width: 85%;
  font-weight: bold;
`;
export const TextDetalhe = styled.Text`
  font-size: 12px;
`;
export const TextDetalheDate = styled.Text`
  font-size: 12px;
  color: ${colors.background.grey70};
  font-weight: bold;
`;
export const IconDetalhe = styled.View`
  position: absolute;
  /* width:40px ;
height:40px ; */
  /* background-color:red; */
  right: 10px;
  bottom: 10px;
`;
