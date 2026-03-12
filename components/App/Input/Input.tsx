import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'Input'}</Text>
            <TextInput style={styles.input} value={state} onChangeText={setState} placeholder="Type here..." />
        </View>
    );
};

export default Input;
