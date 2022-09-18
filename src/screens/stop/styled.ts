import styled from "styled-components/native";
import colors from "../../config/style/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background.white};
`;

export const LinhaWrapper = styled.View`
  width: 90%;
  align-self: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;
export const MessageContainer = styled.View`
  align-self: center;
  width: 90%;
  margin-bottom: 20px;
`;
export const Message = styled.Text`
  color: ${colors.text.dark90};
`;
export const Flex = styled.View`
  flex: 1;
`;
export const ParadasListContainer = styled.View`
  align-self: center;
  width: 90%;
`;
export const ParadasList = styled.FlatList``;
export const ErrorContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  /* background-color: red; */
`;
export const ErrorContent = styled.View`
  /* width: 100px; */
  /* height: 100px; */
  align-items: center;
  justify-content: center;
  /* background-color: yellow; */
`;
export const ErrorMessage = styled.Text`
  text-align: center;
  font-size: 18px;
`;
