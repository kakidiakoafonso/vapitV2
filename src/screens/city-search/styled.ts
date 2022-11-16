import styled from "styled-components/native";
import colors from "../../config/style/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background.white};
  padding-top: 40px;
`;

export const BottomContainer = styled.View`
  background-color: ${colors.background.white};
  flex: 1;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  align-items: center;
`;
export const TextCidadeListTitleContainer = styled.View`
  /* background-color:${colors.background.grey}; */
  width: 90%;
  height: 60px;
  justify-content: center;
`;
export const TextCidadeListTitle = styled.Text`
  color: ${colors.text.dark};
  font-size: 22px;
`;

export const ListContainer = styled.View`
  /* background-color:red; */
  width: 93%;
  height: 100%;
  /* padding:5px; */
`;
export const FlatList = styled.FlatList``;
