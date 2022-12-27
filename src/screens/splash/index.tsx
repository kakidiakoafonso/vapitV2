import * as S from "./styled";
import { Dimensions, Image } from "react-native";
const {width,height} = Dimensions.get('screen')

export function Splash() {
  return (
    <S.Container>
      <Image source={require('../../assets/img/splash.png')} style={{width,height}}/>
    </S.Container>
  );
}
