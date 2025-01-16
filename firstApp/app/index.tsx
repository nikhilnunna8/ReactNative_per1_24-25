import { Image, Alert, Button, StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, View } from "react-native";
import React from "react";
import dog from '../assets/images/animals/dog.png';
import MyButton from '../app/components/MyButton';


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
      <Image 
          style={styles.imageStyles}
          source={{uri: 'https://picsum.photos/200/100'}}
        />
      {/* <Image 
          style={styles.imageStyles}
          source={require('.app/assets/images/cat.png')}
        /> */}
      <Image
          style={styles.imageStyles}
          source={ dog }
        />
      <MyButton />
    </View>
  );
}
const styles = StyleSheet.create({
  imageStyles: {
    width: 350,
    height: 200,
    margin: 10,
    borderColor: 'black',
    borderWidth: 3,
  },
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  }
});

