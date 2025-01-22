import { Image, Alert, Button, StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, View, TextInput } from "react-native";
import React from "react";
import dog from '../assets/images/animals/dog.png';
import cat from '../assets/images/animals/cat.png';
import MyButton from '../app/components/MyButton';
import Zocial from '@expo/vector-icons/Zocial';
import IconTextButton from "./components/IconTextButton";
import Counter from "./components/Counter";
import TextInputExample from "./components/TextInputExample";


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
    <View style={styles.container}>
      <TextInputExample />
      <Counter />
      <IconTextButton text="Spotify" name="spoticon"/>
      <Image 
          style={styles.imageStyles}
          source={{uri: 'https://picsum.photos/200/100'}}
        />
      <Image
          style={styles.imageStyles}
          source={ dog }
        />
      <Image
          style={styles.imageStyles}
          source={ cat }
        />
      <MyButton title="button1" onPress={() => console.log("1")} color="red"/>
      <MyButton title="button2" onPress={() => console.log("2")} textColor="yellow"/>
    </View>
  );
}
const styles = StyleSheet.create({
  imageStyles: {
    width: 250,
    height: 100,
    margin: 10,
    borderColor: 'black',
    borderWidth: 3,
  },
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  }
});

