import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>MyButton</Text>
    </View>
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