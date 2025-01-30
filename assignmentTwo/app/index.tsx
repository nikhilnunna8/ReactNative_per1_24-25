import { Image, Switch, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import React, { useState } from 'react';
import MySlider from "./components/MySlider";
import colors from "@/styles/colors";
import defaultStyles from "@/styles/defaultStyles";
import MyTextArea from "./components/MyTextArea";
import MyModal from "./components/MyModal";
import MyButton from "./components/MyButton";
import ferrari from '../assets/images/cars/ferrari.jpg';
import bugatti from '../assets/images/cars/bugatti.jpeg';


export default function Index() {
  const [selectedId, setSelectedId] = useState(false)
  const toggleSwitch = () => {
    setSelectedId(previousState => !previousState)
    console.log("selected" + selectedId)
  };

  return (
    <View style={[defaultStyles.container, {backgroundColor: selectedId == false? colors.primary.light : colors.primary.dark}]}>
      <Text style={[defaultStyles.title, {color: selectedId == false? colors.tertiary.light : colors.tertiary.dark}]}>Cars Survey</Text>
      <View style = {[defaultStyles.slidercontainer, {backgroundColor: selectedId == false? colors.secondary.light : colors.secondary.dark}]}>
        <MySlider 
          value = {selectedId}
          onValueChange = {toggleSwitch}
        />
      </View>
      <MyTextArea />
      <Text style={defaultStyles.subtitle}>Option 1</Text>
      <Image
          style={defaultStyles.imageStyles}
          source={ ferrari }
        />
      <Text style={defaultStyles.subtitle}>Option 2</Text>
      <Image
          style={defaultStyles.imageStyles}
          source={ bugatti }
        />
    </View>
  );
}
