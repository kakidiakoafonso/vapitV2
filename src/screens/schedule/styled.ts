import styled from "styled-components/native";
import colors from "../../config/style/colors";
import { Platform } from "react-native";

const android: boolean = Platform.OS == "android";
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background.white};
  padding-top: ${android ? "25px" : "0px"};
`;
export const ScrollView = styled.ScrollView`
  flex: 1;
`;
export const OrigemDestinationContainer = styled.View`
  width: 90%;
  align-self: center;
  justify-content: space-evenly;
`;
export const TimeMessageContainer = styled.View`
  width: 90%;
  /* height:70px ; */
  align-self: center;
  /* background-color:red ; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Image = styled.View`
  background-color: ${colors.background.grey};
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;
export const TextTimeMessageContainer = styled.View`
  flex-direction: row;
`;
export const FilterText = styled.Text`
  margin-left: 10px;
`;
export const TextTimeMinutes = styled.Text`
  margin-right: 3px;
  font-weight: bold;
`;

export const Line = styled.View`
  width: 90%;
  height: 3px;
  align-self: center;
  background-color: ${colors.background.grey};
  margin-top: 20px;
`;

export const FilterContainer = styled.View`
  width: 90%;
  align-self: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
`;
export const FilterButtons = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;
export const ButtonClear = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const TextVerMais = styled.Text`
  margin-right: 10px;
  font-size: 17px;
`;
export const AdvertsContainer = styled.View`
  margin: 15px 0;
`;
export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
`;

export const EmptyAnimation = styled.View`
  margin-top: 10%;
  margin-bottom: 10%;
`;

export const EmptyText = styled.Text`
  margin-right: 10px;
  font-size: 17px;
  color: ${colors.background.green};
  font-weight: bold;
  font-size: 18px;
`;
