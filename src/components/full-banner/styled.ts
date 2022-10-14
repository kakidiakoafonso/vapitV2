import styled from "styled-components/native";
export const Modal = styled.Modal``;
export const ShadowContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const BannerContainer = styled.TouchableOpacity`
  width: 85%;
  height: 70%;
  background-color: #fff;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const CloseIcon = styled.TouchableOpacity`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #ddd;
  border-radius: 15px;
  right: -20px;
  top: -30px;
  justify-content: center;
  align-items: center;
`;

export const CounterMessageContainer = styled.View`
  height: 30px;
  /* background-color: red; */
  align-items: flex-end;
  justify-content: center;
  padding-right: 10px;
`;

export const TextCounters = styled.Text`
  color: #fff;
`;
export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
