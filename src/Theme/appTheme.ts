import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: Platform.OS === "ios" ? 30 : 0,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  nextResult: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 30,
    textAlign: "right",
  },
  result: {
    color: "white",
    fontSize: 60,
    textAlign: "right",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
