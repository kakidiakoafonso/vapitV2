import { Platform } from "react-native";
import styled from "styled-components/native";
import colors from "../../config/style/colors";

const android: boolean = Platform.OS === "android";
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background.green};
  padding-top: ${android ? "35px" : "0px"};
`;

export const TopContainer = styled.View`
  /* background-color:${colors.background.grey}; */
  width: 100%;
  height: 185px;
`;

export const IconContainer = styled.View`
  /* background-color:red; */
`;
export const IconBack = styled.TouchableOpacity`
  /* background-color:pink; */
  width: 70px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.View`
  /* background-color:${colors.background.white}; */
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.text.white};
`;
export const Message = styled.Text`
  font-weight: bold;
  color: ${colors.text.white};
`;

export const InputContainer = styled.View`
  background-color: ${colors.background.white};
  width: 90%;
  height: 55px;
  border-radius: 55px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;
export const Input = styled.TextInput`
  /* background-color:${colors.background.grey}; */
  width: 70%;
  height: 100%;
`;
export const SearchIcon = styled.View`
  /* background-color:red; */
  height: 100%;
  align-items: center;
  justify-content: center;
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
  height: 83%;
  padding: 5px;
`;
export const FlatList = styled.FlatList``;
