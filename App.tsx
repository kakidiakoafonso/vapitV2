import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Route } from "./src/route";

// Create a client
const queryClient = new QueryClient();
export default function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="auto" />
        <Route />
      </QueryClientProvider>
    </React.Fragment>
  );
}
