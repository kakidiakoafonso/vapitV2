import React from "react";
import * as Linking from "expo-linking";
import * as Styled from "./styled";
import { Dimensions, FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import Carousel from "react-native-reanimated-carousel";
import { reducerState } from "../../redux/rootReducer";
// import Admob from "../Admob/Admob";

export function MobileSquare() {
  const adverts = useSelector<reducerState, IAdverts[]>((state) =>
    state.adverts.filter((e) => e.width === 320 && e.height === 50)
  );

  const width = Dimensions.get("window").width;
  const [advertsIndex, setadvertsIndex] = React.useState<number>(0);
  const refScrollView = React.useRef<FlatList>(null);
  if (adverts.length === 0) return null;
  const handleLinking = (linkToNavigate: string) =>
    Linking.openURL(linkToNavigate);
  return (
    <View
      style={{
        width: 320,
        height: 50,
        alignSelf: "center",
      }}
    >
      {
        adverts.length === 1 ?
        <Styled.ImageButton
        onPress={() => handleLinking(String(adverts[0].link))}
        activeOpacity={1}
      >
        <Styled.Image
          source={{ uri: adverts[0].url }}
          resizeMethod="resize"
          resizeMode="stretch"
        >
          {/* <Styled.Content>
            <Styled.Title>{item.title}</Styled.Title>
            <Styled.Description>{item.description}</Styled.Description>
          </Styled.Content> */}
        </Styled.Image>
      </Styled.ImageButton>
      :
        
        <Carousel
        loop
        width={320}
        height={50}
        autoPlay={true}
        data={adverts}
        scrollAnimationDuration={1500}
        autoPlayInterval={3000}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ item }) => (
          <Styled.ImageButton
            onPress={() => handleLinking(String(item.link))}
            activeOpacity={1}
          >
            <Styled.Image
              source={{ uri: item.url }}
              resizeMethod="resize"
              resizeMode="stretch"
            >
              {/* <Styled.Content>
                <Styled.Title>{item.title}</Styled.Title>
                <Styled.Description>{item.description}</Styled.Description>
              </Styled.Content> */}
            </Styled.Image>
          </Styled.ImageButton>
        )}
      />}
    </View>
  );
}
