import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import * as Styled from "./styled";
import colors from "../../config/style/colors";
import { useNavigation } from "@react-navigation/native";
// import Error from "../../components/Error/Error";

type Props = {
  city: ICitie;
};
const url: String[] = [
  "https://explozaogamer.com.br/wp-content/uploads/2022/02/Sem-Titulo-1-2.png",
  "https://explozaogamer.com.br/wp-content/uploads/2022/02/f255b7_cb3adb1b0dba4227a4cb9b8429e1cf0f_mv2-696x331.png",
  "https://explozaogamer.com.br/wp-content/uploads/2022/02/f255b7_fbbd953ec6a748e5a54435733efae013_mv2-696x392.jpeg",
];
export default function CityCard({ city }: Props) {
  const { navigate } = useNavigation();
  // const { url } = city;
  function handleNavigate() {
    navigate("home", { url });
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
