import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IButtonCalculator {
  text: string;
  action: (value: string) => void;
  color?: string;
  width?: boolean;
}

const ButtonCalculator = ({
  text,
  color = "#2D2D2D",
  width = false,
  action,
}: IButtonCalculator) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: width ? 180 : 80,
        }}
      >
        <Text
          style={{
            ...styles.buttonText,
            color: color === "#9B9B9B" ? "black" : "white",
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCalculator;
