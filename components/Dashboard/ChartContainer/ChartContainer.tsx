import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { ChartContainerProps } from './types';

const ChartContainer: React.FC<ChartContainerProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'ChartContainer'}</Text>
            
        </View>
    );
};

export default ChartContainer;
