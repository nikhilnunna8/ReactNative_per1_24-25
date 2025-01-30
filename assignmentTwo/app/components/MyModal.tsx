import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MyButton from './MyButton';
import defaultStyles from '@/styles/defaultStyles';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const MyModal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={defaultStyles.modalcontainer}>
        <View>
          <View>{children}</View>
        <MyButton title="Close" onPress={onClose}/>
        </View>
      </View>
    </Modal>
  );
};

export default MyModal;