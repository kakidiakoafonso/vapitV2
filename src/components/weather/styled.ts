import styled from "styled-components/native";
import colors from "../../config/style/colors";

const width = "350px";
const height = "200px";

export const Container = styled.View`
  width: 100%;
  height: 80px;
  background-color: #f4f4f5;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-right: 10px;
`;
export const ImageContainer = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  /* background-color:#EBEBED; */
  background-color: #fff;
  margin-left: 2%;
  align-items: center;
  justify-content: center;
`;
export const ImageLoadingContainer = styled.View`
  margin-left: 2%;
`;
export const ContentContainer = styled.View`
  width: 80%;
  height: 80%;
  margin-left: 2%;
`;
export const TemperatureLabel = styled.Text`
  font-weight: bold;
`;
export const TemperatureText = styled.Text`
  font-size: 20px;
  margin-right: 10px;
  font-weight: bold;
`;
export const RainText = styled.Text`
  font-size: 12px;
`;

export const Content = styled.View`
  width: 100%;
  height: 70%;
  margin-left: 2%;
  flex-direction: row;
  align-items: center;
`;
