import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import * as Styled from "./styled";

type Props = {
  data: string[];
};
export function Banner({ data }: Props) {
  const [active, setactive] = useState<number>(0);

  const width = Dimensions.get("window").width;
  return (
    <Styled.Container>
      <Carousel
        loop
        width={width * 0.9}
        height={240}
        autoPlay={true}
        data={data}
        onSnapToItem={(index) => setactive(index)}
        scrollAnimationDuration={1500}
        autoPlayInterval={3000}
        renderItem={({ item }) => (
          <Styled.Image
            source={{ uri: item }}
            resizeMethod="auto"
            resizeMode="stretch"
          />
        )}
      />
      <Styled.IndicatorContainer horizontal>
        {data.map((item, index) => {
          return active === index ? (
            <Styled.Indicator key={index} />
          ) : (
            <Styled.IndicatorOff key={index} />
          );
        })}
      </Styled.IndicatorContainer>
    </Styled.Container>
  );
}
