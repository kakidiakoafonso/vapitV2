import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { store } from "./src/redux";
import { Route } from "./src/route";

// SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();
export default function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <StatusBar style="auto" />
          <Route />
        </QueryClientProvider>
      </Provider>
    </React.Fragment>
  );
}
