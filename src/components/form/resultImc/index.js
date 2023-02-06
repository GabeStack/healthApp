import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
export default function ResultIMC(props){
  return(
  <View style={styles.resultIMC}>
    
    <Text style={styles.information}>{props.mensagemResult}</Text>
    <Text style={styles.numberIMC}>{props.resultIMC}</Text>

  </View>
  );
}