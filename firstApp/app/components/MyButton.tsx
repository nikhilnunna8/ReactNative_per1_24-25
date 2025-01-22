import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'


type propsType = {
  title: string;
  color?: string; //optional parameter/prop with the ?
  textColor?: string;
  onPress: () => void;
};

const MyButton: React.FC<propsType> = ({
  title,
  color = "gray", //specifying a default of green
  textColor = "black", 
  onPress,
}) => {
  return (
    <TouchableHighlight style={[styles.buttonContainer, { backgroundColor: color }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableHighlight>
  )
}

export default MyButton

const styles = StyleSheet.create({
    buttonContainer: {
        height: 50,
        width: 120,
        backgroundColor: 'yellow',
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",

    },
    buttonText: {
        fontSize: 16,
        color: 'blue',
    },
})