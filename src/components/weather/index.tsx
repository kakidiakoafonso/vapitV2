import * as Styled from "./styled";
import React from "react";
import { Skeleton } from "moti/skeleton";
import { useSelector } from "react-redux";
import { reducerState } from "../../redux/rootReducer";

export function Weather() {
  const weather = useSelector<reducerState, IWeather>(
    (state) => state.weather.weather
  );
  const isLoading = useSelector<reducerState, boolean>(
    (state) => state.weather.loading
  );
  const errorMessage = useSelector<reducerState, String>(
    (state) => state.weather.error
  );
  if (errorMessage) return null;
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
