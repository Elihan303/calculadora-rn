import React, { useRef, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "../Theme/appTheme";
import ButtonCalculator from "../components/ButtonCalculator";
import useCalculator from "../hooks/useCalculator";

const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    clear,
    positiveNegative,
    createNumber,
    opAdd,
    opMultiply,
    opSplit,
    opSubtract,
    deleteNumber,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {/* condicional para presentar el numeero anterior */}
      {prevNumber !== "0" && (
        <Text style={styles.nextResult}>{prevNumber} </Text>
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}{" "}
      </Text>
      {/* Rows calculator */}
      <View style={styles.row}>
        {/* Buttons */}
        {/* Gris oscuro #2D2D2D */}
        {/* Naraja #FF9427 */}
        <ButtonCalculator text="C" color="#9B9B9B" action={clear} />
        <ButtonCalculator
          text="+/-"
          color="#9B9B9B"
          action={positiveNegative}
        />
        <ButtonCalculator text="del" color="#9B9B9B" action={deleteNumber} />
        <ButtonCalculator text="÷" color="#FF9427" action={opSplit} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="7" action={createNumber} />
        <ButtonCalculator text="8" action={createNumber} />
        <ButtonCalculator text="9" action={createNumber} />
        <ButtonCalculator text="x" color="#FF9427" action={opMultiply} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="4" action={createNumber} />
        <ButtonCalculator text="5" action={createNumber} />
        <ButtonCalculator text="6" action={createNumber} />
        <ButtonCalculator text="-" color="#FF9427" action={opSubtract} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="1" action={createNumber} />
        <ButtonCalculator text="2" action={createNumber} />
        <ButtonCalculator text="3" action={createNumber} />
        <ButtonCalculator text="+" color="#FF9427" action={opAdd} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="0" action={createNumber} width />
        <ButtonCalculator text="." action={createNumber} />
        <ButtonCalculator text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
