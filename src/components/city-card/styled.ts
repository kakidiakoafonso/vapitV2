import styled from "styled-components/native";
import colors from "../../config/style/colors";

export const Item = styled.TouchableOpacity`
  background-color: ${colors.background.grey80};
  width: 100%;
  height: 90px;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  flex-direction: row;
  margin-bottom: 15px;
`;
export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const ItemImage = styled.View`
  background-color: ${colors.background.green};
  width: 60px;
  height: 60px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;
export const ItemContent = styled.View`
  /* background-color:${colors.background.green}; */
  height: 40px;
  margin-left: 10px;
  justify-content: center;
  justify-content: space-between;
`;
export const TextName = styled.Text`
  color: ${colors.text.dark};
`;
export const TextUpdateDate = styled.Text`
  color: ${colors.text.dark};
  opacity: 0.5;
`;
export const ItemIcon = styled.View``;
