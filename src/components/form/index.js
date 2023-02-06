import React, {useState} from "react";
import { View,TextInput, Text, TouchableOpacity } from "react-native";
import ResultIMC from "./resultImc";
import styles from "./style";


export default function Form(){

  const[heigth, setHeigth] = useState(null);
  const[weigth, setWeigth] = useState(null);
  const[mensagemIMC, setMensagemIMC] = useState('Preeencha peso e altura');
  const[IMC, setIMC] = useState(null);
  const[textButton, setTextButton] = useState('Calcular');

  function imcCalculator(){
    return setIMC((weigth /(heigth*heigth)).toFixed(2))
  }
  function validatorIMC(){
    if(weigth != null && heigth != null){
      imcCalculator();
      setWeigth(null);
      setHeigth(null);
      setMensagemIMC('Seu IMC é igual:');
      setTextButton('Calcular novamente');
    }else{
    setIMC(null);
    setTextButton('Calcular');
    setMensagemIMC('Preencha peso e altura');
    }
  }
  return(
  <View style={styles.formContent}>
    <View style={styles.form}>
      <Text style={styles.formLabel}> Altura</Text>
      <TextInput style={styles.formInput} placeholder="Exemplo 1.75" keyboardType="numeric" value={heigth} onChangeText={setHeigth}/>
      <Text style={styles.formLabel}> Peso</Text>
      <TextInput style={styles.formInput} placeholder="Exemplo 104.3" keyboardType="numeric" value={weigth} onChangeText={setWeigth}/>
      <TouchableOpacity style={styles.formButtom} onPress={() => validatorIMC()}>
        <Text style={styles.formButtomText}>{textButton}</Text>
      </TouchableOpacity>
    </View>
    <ResultIMC mensagemResult={mensagemIMC} resultIMC={IMC}  />
  </View>
  );
}