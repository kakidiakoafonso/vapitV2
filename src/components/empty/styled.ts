import styled from "styled-components/native";
import colors from "../../config/style/colors";

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
