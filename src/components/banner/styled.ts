import styled from "styled-components/native";
import colors from "../../config/style/colors";

const width = "350px";
const height = "200px";

export const Container = styled.View`
  width: ${width};
  height: ${height};
  /* background-color:red; */
  align-self: center;
`;
export const FlastList = styled.FlatList``;
export const Image = styled.Image`
  width: ${width};
  height: ${height};
  background-color: grey;
  border-radius: 10px;
`;
export const IndicatorContainer = styled.ScrollView`
  /* width:150px; */
  /* height:30px; */
  /* background-color:grey; */
  position: absolute;
  align-self: center;
  bottom: 10px;
  flex-direction: row;
`;
export const Indicator = styled.View`
  width: 40px;
  height: 11px;
  border-radius: 10px;
  background-color: #32969b;
  margin: 0px 2px;
`;
export const IndicatorOff = styled.View`
  width: 12px;
  height: 11px;
  border-radius: 10px;
  background-color: #fff;
  margin: 0px 2px;
`;
