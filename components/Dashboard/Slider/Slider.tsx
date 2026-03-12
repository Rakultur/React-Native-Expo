import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { SliderProps } from './types';

const Slider: React.FC<SliderProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'Slider'}</Text>
            
        </View>
    );
};

export default Slider;
