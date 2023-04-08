import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Campobase from "./components/CampobaseComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <Campobase />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}
