import styled from "styled-components/native";
import colors from "../../config/style/colors";
import { Platform } from "react-native";

const android: boolean = Platform.OS == "android";
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background.white};
  margin-top: ${android ? "25px" : "0px"};
`;
export const Header = styled.View`
  width: 90%;
  height: 60px;
  align-self: center;
  /* background-color: red; */
  margin-top: 1%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const Menu = styled.TouchableOpacity``;
export const LefContainer = styled.View`
  /* width: 95px; */
  height: 50px;
  /* background-color: pink; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextLocationname = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Body = styled.ScrollView`
  flex: 1;
  /* background-color:yellow ; */
`;

export const ScrollViewContainer = styled.View`
  /* background-color:red; */
  width: 90%;
  /* height:100px; */
  align-self: center;
  margin: 10px 0px;
`;
export const ScrollView = styled.View``;
export const UltimasLinhasText = styled.Text`
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 15px;
  font-weight: bold;
  color: ${colors.text.dark90};
`;
export const LinhasContainer = styled.View`
  width: 95%;
  padding-top: 10px;
  /* height:300px; */
  align-self: center;
  /* background-color:red ; */
`;

export const InputContainer = styled.View`
  background-color: ${colors.background.white};
  width: 90%;
  height: 55px;
  border-radius: 55px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  background-color: ${colors.background.grey80};
  align-self: center;
`;

export const Input = styled.TextInput`
  width: 70%;
  height: 100%;
`;

export const SearchIcon = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const FlatListContainer = styled.View`
  flex: 1;
`;
