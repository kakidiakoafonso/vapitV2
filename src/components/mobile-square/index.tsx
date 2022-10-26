import React from "react";
import * as Linking from "expo-linking";
import * as Styled from "./styled";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { reducerState } from "../../redux/rootReducer";
// import Admob from "../Admob/Admob";

export function MobileSquare() {
  const adverts = useSelector<reducerState, IAdverts[]>((state) =>
    state.adverts.filter((e) => e.width === 320 && e.height === 50)
  );

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
      <FlatList
        data={adverts}
        showsHorizontalScrollIndicator={false}
        ref={refScrollView}
        initialScrollIndex={0}
        onScrollToIndexFailed={() => setadvertsIndex(0)}
        keyExtractor={(item: any) => String(item.id)}
        horizontal
        pagingEnabled
        renderItem={({ index, item }: { index: number; item: IAdverts }) => (
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
      />
    </View>
  );
}
