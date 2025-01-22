import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {useState} from 'react'

const TextInputExample: React.FC = () => {
    const [name, setName] = useState<string>("")
    const [activity, setActivity] = useState<string>("")
  return (
    <View>
      <Text>TextInputExample</Text>
      <TextInput 
        style={styles.textInput}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
        placeholder="type here"
        placeholderTextColor="red"
        textAlign='right'
      />
      <Text> The name is {name}</Text>
    
    </View>
  )
}

export default TextInputExample

const styles = StyleSheet.create({
    textInput: {
        fontSize: 15,
        borderColor: "green",
        backgroundColor: "green",

    },
})