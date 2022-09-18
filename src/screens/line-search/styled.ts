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

export const ListContainer = styled.ScrollView`
  width: 95%;
  height: 100%;
`;
export const FlatList = styled.FlatList``;
export const LabelContainer = styled.View`
  width: 95%;
  margin-bottom: 15px;
`;
export const Label = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 7px;
  margin-bottom: 12px;
  color: ${colors.text.dark90};
`;
