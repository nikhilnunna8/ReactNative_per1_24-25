import { Alert, Button, StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, View } from "react-native";
import React from "react";


export default function AlertEx() {
  const myAlertFn = () => {
    Alert.alert("title", "message", [
      { text: "Yes", onPress: () => console.log("Pressed yes") },
      { text: "No", onPress: () => console.log("Pressed no") },
    ]);
  };

  const touchablePressed = () => {
    console.log("pressed the touchable")
  }

  return (
    <View>
      {/* You can use self closing syntax when you arent putting anything inside */}
      <Button title="Alert Button" onPress={myAlertFn} />
      <TouchableHighlight
        onPress={touchablePressed}
        underlayColor="hotpink"
      >
        <Text>Touchable Highlight</Text>
      </TouchableHighlight>
      <TouchableOpacity style={styles.opacityContainer}>
        <Text style={styles.text}>Touchable Opacity</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  opacityContainer: {
    height: 40,
    width: "50%",
    backgroundColor: "yellow",
    borderWidth: 2,
    borderColor: "orange",
  },    
  text: {
    fontWeight: "bold",
  },
});

