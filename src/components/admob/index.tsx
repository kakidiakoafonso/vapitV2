import React, { useEffect } from "react";
import * as Styled from "./styled";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";
import { Platform } from "react-native";

const MeuBanner = "ca-app-pub-9489090110653197/7792359339";
const Banner = "ca-app-pub-3940256099942544/2934735716";
const Interstitial = "ca-app-pub-3940256099942544/4411468910";
const InterstitialVideo = "ca-app-pub-3940256099942544/5135589807";
const Rewarded = "ca-app-pub-3940256099942544/1712485313";

// Funciona com fulbaner
const Funciona = "ca-app-pub-9489090110653197/3006591032";
const UnitID = "ca-app-pub-9489090110653197/7792359339";
export function Admob() {
  async function admobHandle() {
    console.log("Executando anuncios");
    try {
      await AdMobInterstitial.setAdUnitID(UnitID); // Test ID, Replace with your-admob-unit-id
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
      await AdMobInterstitial.showAdAsync();
    } catch (error) {
      console.log(error);
    }
  }
  function bannerError(error: string) {
    console.log(`Erro: onDidFailToReceiveAdWithError={bannerError}`);
    console.log(`Erro: ${error}`);
  }

  useEffect(() => {
    admobHandle();
  }, []);
  return (
    <Styled.Container>
      <AdMobBanner
        bannerSize="banner"
        // bannerSize="mediumRectangle"
        adUnitID={UnitID} // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        // style={{width:350,height:50}}
        onAdViewDidReceiveAd={() => console.log("onAdViewDidReceiveAd")}
        onDidFailToReceiveAdWithError={bannerError}
      />
    </Styled.Container>
  );
}

// import React, { useEffect } from "react";
// import * as Styled from "./styled";
// import {
//   AdMobBanner,
//   AdMobInterstitial,
//   PublisherBanner,
//   AdMobRewarded,
//   setTestDeviceIDAsync,
// } from "expo-ads-admob";
// import { Platform } from "react-native";

// const MeuBanner = "ca-app-pub-9489090110653197/7792359339";
// const Banner = "ca-app-pub-3940256099942544/2934735716";
// const Interstitial = "ca-app-pub-3940256099942544/4411468910";
// const InterstitialVideo = "ca-app-pub-3940256099942544/5135589807";
// const Rewarded = "ca-app-pub-3940256099942544/1712485313";

// // Funciona com fulbaner
// const Funciona = "ca-app-pub-9489090110653197/3006591032";
// const UnitID = "ca-app-pub-9489090110653197/7792359339";

// type Props = {
//   bannerSize?: "banner" | "mediumRectangle";
//   hiddeAdmob?: boolean;
// };
// export function Admob({
//   bannerSize = "mediumRectangle",
//   hiddeAdmob = false,
// }: Props) {
//   async function admobHandle() {
//     console.log("Executando anuncios");
//     try {
//       await AdMobInterstitial.setAdUnitID(UnitID); // Test ID, Replace with your-admob-unit-id
//       await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
//       await AdMobInterstitial.showAdAsync();
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   function bannerError(error: string) {
//     console.log(`Erro: onDidFailToReceiveAdWithError={bannerError}`);
//     console.log(`Erro: ${error}`);
//   }

//   useEffect(() => {
//     admobHandle();
//   }, []);
//   if (hiddeAdmob) return null;
//   return (
//     <Styled.Container>
//       <AdMobBanner
//         bannerSize={bannerSize}
//         adUnitID={UnitID} // Test ID, Replace with your-admob-unit-id
//         servePersonalizedAds // true or false
//         // style={{width:350,height:50}}
//         onAdViewDidReceiveAd={() => console.log("onAdViewDidReceiveAd")}
//         onDidFailToReceiveAdWithError={bannerError}
//       />
//     </Styled.Container>
//   );
// }
