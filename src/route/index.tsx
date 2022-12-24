import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home/Home";
import { Welcome } from "../screens/welcome/Welcome";
import { WelcomeSecond } from "../screens/welcome/WelcomeSecond";
import { WelcomeThird } from "../screens/welcome/WelcomeThird";
import { City} from "../screens/city";
import { SearchCitie } from "../screens/city-search";
import { SearchLine } from "../screens/line-search";
import { Stop } from "../screens/stop/index";
import { Schedule } from "../screens/schedule";
import { Text, View } from "react-native";
import { Privacy } from "../screens/privacy";
import { Splash } from "../screens/splash";

const Stack = createNativeStackNavigator();

export function Route() {
  const [appIsReady, setAppIsReady] = React.useState(false);
  const [firstTime, setFirstTime] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        const value = await AsyncStorage.getItem("@vapit");
        if (value !== null) setFirstTime(false);
        else setFirstTime(true);
        console.log(value);
      } catch (e) {
        console.log(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // const onLayoutRootView = React.useCallback(async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  if (!appIsReady) {
    return <Splash/>
  }
  return (
    // <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={firstTime ? "privacy" : "city"}
        >
          <Stack.Screen name="privacy" component={Privacy} />
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="welcome2" component={WelcomeSecond} />
          <Stack.Screen name="welcome3" component={WelcomeThird} />
          <Stack.Screen name="city" component={City} />
          <Stack.Screen name="citySearch" component={SearchCitie} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="lineSearch" component={SearchLine} />
          <Stack.Screen name="stop" component={Stop} />
          <Stack.Screen name="schedule" component={Schedule} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
