import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'Modal'}</Text>
            
        </View>
    );
};

export default Modal;
