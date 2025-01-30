import { Switch, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import React, { useState } from 'react';
import MySlider from "./components/MySlider";
import colors from "@/styles/colors";
import defaultStyles from "@/styles/defaultStyles";


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
    </View>
  );
}
