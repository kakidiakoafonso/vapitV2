import styled from "styled-components/native";
import colors from "../../config/style/colors";

export const Container = styled.Modal``;
export const DarkContainer = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
export const Center = styled.View`
  width: 90%;
  height: 60%;
  padding: 10px;
  border-radius: 6px;
`;
export const ContentContainer = styled.View`
  width: 100%;
  border-radius: 6px;
  height: 100%;
  background-color: ${colors.background.white};
  justify-content: center;
  align-items: center;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  align-items: center;
`;
export const IconClose = styled.TouchableOpacity``;

export const ScheduleContainer = styled.View`
  background-color: ${colors.background.grey80};
  width: 90%;
  flex-direction: column;
  margin-bottom: 20px;
  align-self: center;
  border-radius: 4px;
  padding: 10px 5%;
`;
export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 7px;
`;
export const IconPath = styled.View``;
export const IconRight = styled.View`
  margin: 0 4px;
`;
export const Group = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-left: 7%;
`;
export const Label = styled.Text`
  color: ${colors.text.dark};
  opacity: 0.5;
`;

export const TextValue = styled.Text`
  color: ${colors.text.dark};
  font-size: 11px;
  opacity: 0.6;
`;
