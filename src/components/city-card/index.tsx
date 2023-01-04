import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import * as Styled from "./styled";
import colors from "../../config/style/colors";
import { useNavigation } from "@react-navigation/native";
// import Error from "../../components/Error/Error";

type Props = {
  city: ICitie;
};
export default function CityCard({ city }: Props) {
  const { navigate } = useNavigation();
  const { url,weather } = city;
  function handleNavigate() {
    navigate("home", { url, cityId: city.id, weather });
  }
  if (!city.status) return null;
  return (
    <Styled.Item activeOpacity={0.7} onPress={handleNavigate}>
      <Styled.Wrapper>
        <Styled.ItemImage>
          <Ionicons
            name="location-sharp"
            size={34}
            color={colors.background.white}
          />
        </Styled.ItemImage>
        <Styled.ItemContent>
          <Styled.TextName>{city.name}</Styled.TextName>
          <Styled.TextUpdateDate>
            Atualizada em {city.updated_at}
          </Styled.TextUpdateDate>
        </Styled.ItemContent>
      </Styled.Wrapper>

      <Styled.ItemIcon>
        <AntDesign name="right" size={24} color={colors.background.grey} />
      </Styled.ItemIcon>
    </Styled.Item>
  );
}
