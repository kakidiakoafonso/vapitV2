import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Linking from "expo-linking";
import { setBannerViewed } from "../../redux/config/action";
import { reducerState } from "../../redux/rootReducer";
import * as S from "./styled";

export function FullBannner() {
  const dispatch = useDispatch();
  const isAllreadyShow = useSelector<reducerState, boolean>(
    (state) => state.config.bannerAlreadyViewed
  );
  const adverts = useSelector<reducerState, IAdverts[]>((state) =>
    state.adverts.filter((e) => e.height > 50)
  );
  const [showCloseIcon, setshowCloseIcon] = React.useState<boolean>(false);
  const [showModal, setshowModal] = React.useState<boolean>(true);
  const [counter, setCounter] = React.useState<number>(10);
  const closeModal = () => setshowModal(false);

  function handleClick() {
    Linking.openURL(String(adverts[0].url));
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

  React.useEffect(() => {
    return () => {
      dispatch(setBannerViewed());
    };
  }, []);
  //if (isAllreadyShow) return null;
  if (adverts.length === 0) return null;
  return (
    <S.Modal visible={showModal} transparent>
      <S.ShadowContainer>
        {!showCloseIcon && (
          <S.CounterMessageContainer>
            <S.TextCounters>
              Poderá fechar o anúncio em {counter} segundos!
            </S.TextCounters>
          </S.CounterMessageContainer>
        )}
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
