import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { SwitchProps } from './types';

const Switch: React.FC<SwitchProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'Switch'}</Text>
            
        </View>
    );
};

export default Switch;
