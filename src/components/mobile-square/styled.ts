import styled from "styled-components/native";
import colors from "../../config/style/colors";

export const ImageButton = styled.TouchableOpacity`
  width: 320px;
  height: 50px;
`;
export const Image = styled.ImageBackground`
  width: 320px;
  height: 50px;
  justify-content: flex-end;
`;
export const Content = styled.View`
  height: 70%;
  align-items: flex-end;
  padding-right: 3%;
  padding-bottom: 3%;
  justify-content: space-between;
`;
export const Title = styled.Text`
  color: ${colors.text.dark};
  font-size: 18px;
`;
export const Description = styled.Text`
  color: ${colors.text.dark};
  font-size: 16px;
`;

export const ErrorContainer = styled.View`
  width: 100%;
  height: 130px;
`;
