import { NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import React, { useState } from "react";
import * as Styled from "./styled";

type Props = {
  data: string[];
};
export function Banner({ data }: Props) {
  const [active, setactive] = useState<number>(0);

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const position: number = event.nativeEvent.contentOffset.x;
    setactive(position / 350);
    // console.log(event.nativeEvent.contentOffset.x)
    // if((data.length*350) >position)
    //     console.log("Maior");
  };

  return (
    <Styled.Container>
      <Styled.FlastList
        data={data}
        keyExtractor={(item) => String(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={handleScrollEnd}
        renderItem={({ item }) => (
          <Styled.Image
            source={{ uri: item }}
            resizeMethod="auto"
            resizeMode="stretch"
          />
        )}
      />
      <Styled.IndicatorContainer horizontal>
        {/* <Styled.Indicator/> */}
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
