import React from "react";
import LottieView from "lottie-react-native";
import colors from "../../config/style/colors";
import * as Styled from "./styled";

type Props = {
  message: String;
};
export function EmptyAnimation({ message }: Props) {
  return (
    <Styled.EmptyContainer>
      <Styled.EmptyAnimation>
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 300,
            backgroundColor: colors.background.white,
          }}
          source={require("../../assets/lottie/shake-a-empty-box.json")}
        />
      </Styled.EmptyAnimation>
      <Styled.EmptyText>{message}</Styled.EmptyText>
    </Styled.EmptyContainer>
  );
}
