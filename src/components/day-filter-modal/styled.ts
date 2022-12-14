import styled from "styled-components/native";
import colors from "../../config/style/colors";

export const Container = styled.Modal``;
export const DarkContainer = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
export const ContentContainer = styled.View`
  width: 90%;
  border-radius: 6px;
  height: 200px;
  background-color: ${colors.background.white};
  justify-content: center;
  align-items: center;
`;
export const CenterContainer = styled.View`
  width: 98%;
  height: 98%;
`;
export const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;
export const Text = styled.Text`
  font-size: 15px;
  color: ${colors.background.green};
  font-weight: bold;
`;
export const IconClose = styled.TouchableOpacity``;

export const Table = styled.View`
  flex: 1;
  margin-top: 20px;
`;
export const TableHeader = styled.View`
  width: 100%;
  height: 45px;
  background-color: ${colors.background.green};
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const HeaderRow = styled.View`
  width: 120px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const TableBody = styled.View`
  width: 100%;
  height: 40px;
  border: 1px solid ${colors.background.green};
  border-top-width: 0px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const Row = styled.View`
  width: 140px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

export const RowSeparator = styled.View`
  height: 100%;
  width: 1px;
  background-color: ${colors.background.green};
`;
export const ButtonContainer = styled.View`
  height: 100px;
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const Button = styled.TouchableOpacity`
  height: 40px;
  width: 120px;
  border: 1px solid ${colors.background.green};
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  margin-top: 10px;
`;
export const TextButton = styled.Text`
  color: ${colors.background.green};
  font-weight: bold;
  font-size: 14px;
`;
