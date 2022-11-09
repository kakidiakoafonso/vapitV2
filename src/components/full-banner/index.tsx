import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Linking from "expo-linking";
import { setBannerViewed } from "../../redux/config/action";
import { reducerState } from "../../redux/rootReducer";
import * as S from "./styled";

type Props = {
  lineId: Number;
};
export function FullBannner({ lineId }: Props) {
  const dispatch = useDispatch();
  const isAllreadyShow = useSelector<reducerState, Boolean>((state) =>
    state.config.bannerAlreadyViewed.includes(lineId)
  );
  const adverts = useSelector<reducerState, IAdverts[]>((state) =>
    state.adverts.filter((e) => e.height > 50)
  );
  const [showCloseIcon, setshowCloseIcon] = React.useState<boolean>(false);
  const [showModal, setshowModal] = React.useState<boolean>(true);
  const [counter, setCounter] = React.useState<number>(1);
  const closeModal = () => {
    dispatch(setBannerViewed(lineId));
    setshowModal(false);
  };

  function handleClick() {
    Linking.openURL(String(adverts[0].link));
  }
  React.useEffect(() => {
    const bannerTimeout = setTimeout(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    if (counter < 1) {
      clearTimeout(bannerTimeout);
      setshowCloseIcon(true);
    }
    return () => {
      clearTimeout(bannerTimeout);
    };
  }, [counter]);

  // React.useEffect(() => {
  //   return () => {
  //     dispatch(setBannerViewed(lineId));
  //   };
  // }, []);
  if (isAllreadyShow) return null;
  if (adverts.length === 0) return null;
  return (
    <S.Modal visible={showModal} transparent>
      <S.ShadowContainer>
        <S.TopContainer>
          {!showCloseIcon && (
            <S.CounterMessageContainer>
              <S.TextCounters>
                Poderá fechar o anúncio em {counter} segundos!
              </S.TextCounters>
            </S.CounterMessageContainer>
          )}
        </S.TopContainer>
        <S.BannerContainer onPress={handleClick} activeOpacity={0.8}>
          {showCloseIcon && (
            <S.CloseIcon activeOpacity={0.7} onPress={closeModal}>
              <AntDesign name="close" size={24} color="#fff" />
            </S.CloseIcon>
          )}

          <S.Image
            source={{ uri: adverts[0].url }}
            resizeMethod="resize"
            resizeMode="stretch"
          />
        </S.BannerContainer>
      </S.ShadowContainer>
    </S.Modal>
  );
}
