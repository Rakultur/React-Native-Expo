import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ title, onPress, bnt_nombre }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}><Text style={styles.buttonText}>{bnt_nombre}</Text></TouchableOpacity>
        </View>
    );
};

export default Button;
