import React from "react";
import * as Linking from "expo-linking";
import * as Styled from "./styled";
import { FlatList } from "react-native";
// import Admob from "../Admob/Admob";

type Props = {
  adverts: IAdverts[];
};
export function Adverts({ adverts }: Props) {
  const [advertsIndex, setadvertsIndex] = React.useState<number>(0);
  const refScrollView = React.useRef<FlatList>(null);
  if (adverts.length === 0) return null; //<Admob bannerSize="banner" />
  const advertLength = adverts.length - 1;
  // React.useEffect(() => {
  //   if (advertsIndex === advertLength) {
  //     refScrollView.current?.scrollToIndex({
  //       index: 0,
  //       animated: true,
  //       viewPosition: 0.5,
  //     });
  //     setadvertsIndex(0);
  //   } else {
  //     refScrollView.current?.scrollToIndex({
  //       index: advertsIndex,
  //       animated: true,
  //       viewPosition: 0.5,
  //     });
  //   }
  // }, [advertsIndex]);

  // setInterval(() => setadvertsIndex((prev) => prev + 1), 3000);
  const handleLinking = (linkToNavigate: string) =>
    Linking.openURL(linkToNavigate);
  return (
    <Styled.Container>
      <Styled.FlatList
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
              width={item.width}
              height={item.height}
            >
              {/* <Styled.Content>
                <Styled.Title>{item.title}</Styled.Title>
                <Styled.Description>{item.description}</Styled.Description>
              </Styled.Content> */}
            </Styled.Image>
          </Styled.ImageButton>
        )}
      />
    </Styled.Container>
  );
}
