import { AntDesign } from "@expo/vector-icons";
import React from "react";
import * as S from "./styled";

const uri =
  "https://i.pinimg.com/564x/14/e8/56/14e856dd93affc5c45d5ba26482761c5.jpg";
export function FullBannner() {
  const [showCloseIcon, setshowCloseIcon] = React.useState<boolean>(false);
  const [showModal, setshowModal] = React.useState<boolean>(true);
  const [counter, setCounter] = React.useState<number>(4);
  const closeModal = () => setshowModal(false);

  React.useEffect(() => {
    const bannerTimeout = setTimeout(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    if (counter < 1) {
      clearTimeout(bannerTimeout);
      // setshowCloseIcon(true);§
      closeModal();
    }
    return () => {
      clearTimeout(bannerTimeout);
    };
  }, [counter]);
  return (
    <S.Modal visible={showModal} transparent>
      <S.ShadowContainer>
        <S.BannerContainer>
          {showCloseIcon && (
            <S.CloseIcon activeOpacity={0.7} onPress={closeModal}>
              <AntDesign name="close" size={24} color="#fff" />
            </S.CloseIcon>
          )}
          {!showCloseIcon && (
            <S.CounterMessageContainer>
              <S.TextCounters>
                Poderá fechar o anúncio em {counter} segundos!
              </S.TextCounters>
            </S.CounterMessageContainer>
          )}

          <S.Image
            source={{ uri }}
            resizeMethod="resize"
            resizeMode="stretch"
          />
        </S.BannerContainer>
      </S.ShadowContainer>
    </S.Modal>
  );
}
