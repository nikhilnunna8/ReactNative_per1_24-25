import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select';

type propsType = {
    items: { label: string; value: any }[], //Array type for the items in a dropdown
    
}

const MyDropdown: React.FC<propsType> => {
  return (
    <RNPickerSelect>
        
    </RNPickerSelect>
  )
}

export default MyDropdown

const styles = StyleSheet.create({})