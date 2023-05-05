import { useRef, useState } from "react";
import { Operators } from "../enums/Operators";

const useCalculator = () => {
  const [prevNumber, setPrevNumber] = useState<string>("0");
  const [number, setNumber] = useState<string>("0");
  const lastOperation = useRef<Operators>();

  const clear = () => {
    setNumber("0");
    setPrevNumber("0");
  };

  const createNumber = (value: string) => {
    //Validacion de doble punto
    if (number.includes(".") && value === ".") return;
    //Validar si empieza con cero
    if (number.startsWith("0") || number.startsWith("-0")) {
      //validacion punto decimal
      if (value === ".") {
        setNumber(number + value);

        //validar que si es otro cero y hay un punto
      } else if (value === "0" && number.includes(".")) {
        setNumber(number + value);
        //validar si es diferente de cero y no tiene un punto
      } else if (value !== "0" && !number.includes(".")) {
        setNumber(value);
        //evitar 0000.0
      } else if (value === "0" && !number.includes(".")) {
        setNumber(number);
      } else {
        setNumber(number + value);
      }
    } else {
      setNumber(number + value);
    }
  };

  const positiveNegative = () => {
    if (number.includes("-")) {
      setNumber(number.replace("-", ""));
    } else {
      if (number !== "0") {
        setNumber("-" + number);
      }
    }
  };

  const deleteNumber = () => {
    if (number.length === 2 && number.includes("-")) {
      setNumber("0");
      return;
    }
    const result = number.slice(0, -1);
    setNumber(result);
  };

  const changeNumberToProv = () => {
    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber("0");
  };

  const opAdd = () => {
    changeNumberToProv();
    lastOperation.current = Operators.add;
  };
  const opSubtract = () => {
    changeNumberToProv();
    lastOperation.current = Operators.subtract;
  };
  const opMultiply = () => {
    changeNumberToProv();
    lastOperation.current = Operators.multiply;
  };
  const opSplit = () => {
    changeNumberToProv();
    lastOperation.current = Operators.split;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.split:
        setNumber(`${num2 / num1}`);
        break;
    }
    setPrevNumber("0");
  };

  return {
    number,
    prevNumber,
    clear,
    calculate,
    opAdd,
    opMultiply,
    opSubtract,
    opSplit,
    changeNumberToProv,
    positiveNegative,
    createNumber,
    deleteNumber,
  };
};

export default useCalculator;
