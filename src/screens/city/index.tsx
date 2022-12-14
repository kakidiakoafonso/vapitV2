import * as Styled from "./styled";
import React from "react";
import { useGetCities } from "../../hooks";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import SearchIcon from "../../assets/icons/search-r-2.svg";
import { Loading } from "../../components/loader";
import CityCard from "../../components/city-card";
import { useDispatch } from "react-redux";
import { dispatchWeather } from "../../redux/Weather/weather.dispacth";

export function City() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { data, isLoading } = useGetCities();
  React.useEffect(() => {
    dispatch(dispatchWeather());
  }, []);
  function handeOnFocus(){
    if(!isLoading && data){
      if(data.length>0)
        navigation.navigate("citySearch",{
          data
        })
    }
  }
  return (
    <Styled.Container>
      <Styled.TopContainer>
        {/* <Styled.IconContainer>
          <Styled.IconBack onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={40} color="#fff" />
          </Styled.IconBack>
        </Styled.IconContainer> */}

        <Styled.ContentContainer>
          <Styled.Title>Vamos começar</Styled.Title>
          <Styled.Message>Selecione a sua cidade</Styled.Message>
          <Styled.InputContainer>
            <Styled.Input
              placeholder="Pesquisar cidade"
              onFocus={handeOnFocus}
              editable={data?.length>0}
            />
            <Styled.SearchIcon>
              <SearchIcon width={25} height={25} />
            </Styled.SearchIcon>
          </Styled.InputContainer>
        </Styled.ContentContainer>
      </Styled.TopContainer>

      <Styled.BottomContainer>
        <Styled.TextCidadeListTitleContainer>
          <Styled.TextCidadeListTitle>
            Algumas cidades
          </Styled.TextCidadeListTitle>
        </Styled.TextCidadeListTitleContainer>

        {isLoading ? (
          <Styled.ListContainer>
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </Styled.ListContainer>
        ) : (
          <Styled.ListContainer>
            <Styled.FlatList
              data={data}
              keyExtractor={(item: any) => String(item.id)}
              alwaysBounceVertical={false}
              renderItem={({ item }: { item: ICitie }) => (
                <CityCard city={item} />
              )}
            />
          </Styled.ListContainer>
        )}
      </Styled.BottomContainer>
    </Styled.Container>
  );
}
