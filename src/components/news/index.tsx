import React, { useEffect } from "react";
import * as Styled from "./styled";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { INews, Image } from "./types";
import { Skeleton } from "moti/skeleton";
import * as Linking from "expo-linking";
import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const endPoint = "https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=10";

export function News() {
  const [noticias, setnoticias] = React.useState<INews[]>([]);
  const [isloading, setloading] = React.useState<boolean>(false);
  const width = Dimensions.get("window").width;
  async function getNoticias() {
    const { data } = await axios.get(endPoint);
    if (data) {
      const fetchedNews: INews[] = data.items;
      setnoticias(fetchedNews);
      setloading(false);
    } else {
      setloading(false);
    }
  }
  useEffect(() => {
    getNoticias();
  }, []);

  const handleLinking = (linkToNavigate: string) =>
    Linking.openURL(linkToNavigate);

  if (isloading)
    return (
      <Styled.Container>
        <Skeleton width={"100%"} height={240} colorMode="light" />
      </Styled.Container>
    );

  return (
    <Styled.Container>
      <Styled.Titulo>Notícias</Styled.Titulo>

      <Carousel
        loop
        snapEnabled
        width={width * 0.9}
        height={240}
        autoPlay={true}
        data={noticias}
        scrollAnimationDuration={1000}
        autoPlayInterval={3000}
        renderItem={({ item }) => {
          var imageParsed: Image = JSON.parse(item.imagens);

          const imageLink = `https://agenciadenoticias.ibge.gov.br/${imageParsed.image_fulltext}`;
          return (
            <Styled.Wrapper
              activeOpacity={0.7}
              onPress={() => handleLinking(item.link)}
            >
              <Styled.Image
                imageStyle={{ borderRadius: 10 }}
                source={{ uri: imageLink }}
              >
                <Styled.Detalhes>
                  <Styled.WrapperTextDetalhe>
                    <Styled.TextDetalhe>{item.titulo}</Styled.TextDetalhe>
                  </Styled.WrapperTextDetalhe>

                  <Styled.TextDetalheDate>
                    {item.data_publicacao}
                  </Styled.TextDetalheDate>
                </Styled.Detalhes>
                <Styled.IconDetalhe>
                  <FontAwesome name="newspaper-o" size={24} color="#fff" />
                </Styled.IconDetalhe>
              </Styled.Image>
            </Styled.Wrapper>
          );
        }}
      />
    </Styled.Container>
  );
}
