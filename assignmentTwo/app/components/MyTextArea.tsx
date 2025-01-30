import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {useState} from 'react'
import colors from '@/styles/colors'
import defaultStyles from '@/styles/defaultStyles'
import MyButton from './MyButton'
import MyModal from './MyModal'

const MyTextArea: React.FC = () => {
    const [name, setName] = useState<string>("")
    const submit = () => {
        console.log("1")
        setModalVisible(true)
        setName("")
    }
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Text>Your favorite car</Text>
      <TextInput 
        style={defaultStyles.textInput}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
        placeholder="type here"
        placeholderTextColor={colors.tertiary.light}
        textAlign='right'
      />
      <Text> Option number: {name}</Text>
    <MyButton title="Submit" onPress={submit}/>
    <MyModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <Text>You have submitted your favorite car.</Text>
    </MyModal>
    </View>
  )
}

export default MyTextArea
