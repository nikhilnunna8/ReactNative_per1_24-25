import {Switch, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '@/styles/colors';

type propsType = {
    value?: boolean;
    onValueChange: () => void;
};

const MySlider: React.FC<propsType> = ({
    value = false,
    onValueChange,
}) => {
  return (
    <View>
        <Switch
          onValueChange={onValueChange}
          value={value}
          trackColor={{false: colors.red, true: colors.green}}
          ios_backgroundColor={colors.red}
        />
    </View>
  )
}

export default MySlider

const styles = StyleSheet.create({})