import * as Styled from "./styled";
import React from "react";
import { useGetWeather } from "../../hooks";
import { Skeleton } from "moti/skeleton";

type Props = {
  setLocation: (name: string) => void;
};
export function Weather({ setLocation }: Props) {
  const { data: weather, isLoading } = useGetWeather();
  if (weather) setLocation(weather.name);
  return (
    <>
      {isLoading ? (
        <Styled.Container>
          <Styled.ImageLoadingContainer>
            <Skeleton width={60} height={60} colorMode="light" radius={30} />
          </Styled.ImageLoadingContainer>
          <Styled.ContentContainer>
            <Skeleton width={"100%"} height={20} colorMode="light" />
            <Styled.Content>
              <Skeleton width={"100%"} height={20} colorMode="light" />
            </Styled.Content>
          </Styled.ContentContainer>
        </Styled.Container>
      ) : (
        <Styled.Container>
          <Styled.ImageContainer
            source={{
              uri: `https://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`,
            }}
          />
          <Styled.ContentContainer>
            <Styled.TemperatureLabel>{weather?.name}</Styled.TemperatureLabel>
            <Styled.Content>
              <Styled.TemperatureText>
                {" "}
                {weather?.temperature}ºC
              </Styled.TemperatureText>
              <Styled.RainText style={{ textTransform: "capitalize" }}>
                {weather?.weather.description}
              </Styled.RainText>
            </Styled.Content>
          </Styled.ContentContainer>
        </Styled.Container>
      )}
    </>
  );
}
