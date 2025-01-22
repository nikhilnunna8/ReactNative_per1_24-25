import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Zocial from '@expo/vector-icons/Zocial'; //use icons from this family

type propsType = {
    text: string;
    name: string; //optional parameter/prop with the ?
    size?: number;
    backgroundColor?: string;
    textColor?: string;
  
};

const IconTextButton: React.FC<propsType> = ({
    text,
    name,
    size = 15,
    backgroundColor = "blue",
    textColor = "orange",
    
}) => {
  return (
    <View style={styles.buttonRow}>
      <Text style={styles.buttonText}>{text}</Text>
      <Zocial name="spotify" size={size} color={backgroundColor} />
    </View>
  )
}

export default IconTextButton

const styles = StyleSheet.create({
    buttonRow: {
        flexDirection: 'row',
        padding: 5,
        borderWidth: 2,
    },
    buttonText: {
        fontSize: 18,
    }
})