import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform, Button } from 'react-native';
import { AdMobRewarded } from 'expo-ads-admob';
import React from 'react';

export function Admob() {
  React.useEffect(() => {
    return function cleanup() {
      AdMobRewarded.removeAllListeners();
    };
  });

  let adUnitId = Platform.select({
    ios: "ca-app-pub-3940256099942544/1712485313",
    android: "ca-app-pub-3940256099942544/5224354917"
  });

  let loadAd = async () => {
    await AdMobRewarded.setAdUnitID(adUnitId);
    await AdMobRewarded.requestAdAsync();
  };

  AdMobRewarded.addEventListener("rewardedVideoUserDidEarnReward", (reward) => {
    loadAd();
  });

  AdMobRewarded.addEventListener("rewardedVideoDidFailToLoad", () => {
    loadAd();
  });

  AdMobRewarded.addEventListener("rewardedVideoDidDismiss", () => {
    loadAd();
  })

  loadAd();

  return (
    <View style={styles.container}>
      <Button title='Show Reward Ad' onPress={() => { AdMobRewarded.showAdAsync() }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});