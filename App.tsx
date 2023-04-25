import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Campobase from "./components/CampobaseComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from 'react';
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";

export default function App() {
  return(
  <SafeAreaProvider>
    <Provider store={store}>
    <View style={styles.container}>
      <Campobase/>
      <StatusBar style="auto" />
    </View>
    </Provider>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

