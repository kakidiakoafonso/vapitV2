import styled from "styled-components/native";
import colors from "../../config/style/colors";

export const TopContainer = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-bottom: 10px;
`;

export const IconBack = styled.TouchableOpacity`
  /* background-color: red; */
  width: 50px;
  height: 40px;
  align-items: flex-start;
  align-self: center;
`;

export const InputContainer = styled.View`
  background-color: ${colors.background.grey80};
  flex: 1;
  margin-left: 4%;
  height: 45px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;
export const Input = styled.TextInput`
  width: 70%;
  height: 100%;
`;
export const SearchIcon = styled.TouchableOpacity`
  /* background-color:red; */
  height: 100%;
  align-items: center;
  justify-content: center;
`;
