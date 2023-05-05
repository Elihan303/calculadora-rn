import { SafeAreaView, StatusBar } from "react-native";

import { styles } from "./src/Theme/appTheme";
import CalculatorScreen from "./src/screens/CalculatorScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
}
