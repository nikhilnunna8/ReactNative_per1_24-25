import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useState} from 'react'

const Counter: React.FC = () => {
    //define state variable inside the curly braces but before the return
    /*
    Declare a variable called count and setCount is the update function to change its value.
    When setCount is called, everything using count will be rerendered or the screen will "refresh"

    must declare the variable type as number and its initial value is 0.
    */
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        if (count > 0)
            setCount(count-1)
        else
            alert('Negative not allowed')
    }
  return (
    <View style={styles.container}>
      <Text>Number of Students</Text>
      <Text>{count}</Text>
      <Button title="increment" onPress={increment}/>
      <Button title="decrement" onPress={decrement}/>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 350,
        backgroundColor: "lightgrey",
        alignItems: "center",
        marginTop: 10,
    },
})