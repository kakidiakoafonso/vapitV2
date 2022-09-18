import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home/Home";
import { Welcome } from "../screens/welcome/Welcome";
import { WelcomeSecond } from "../screens/welcome/WelcomeSecond";
import { WelcomeThird } from "../screens/welcome/WelcomeThird";
import { City } from "../screens/city";
import { SearchCitie } from "../screens/city-search";
import { SearchLine } from "../screens/line-search";
import { Stop } from "../screens/stop/index";
import { Schedule } from "../screens/schedule";

const Stack = createNativeStackNavigator();

export function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="city"
      >
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
  );
}
