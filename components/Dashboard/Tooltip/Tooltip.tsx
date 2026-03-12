import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { TooltipProps } from './types';

const Tooltip: React.FC<TooltipProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'Tooltip'}</Text>
            
        </View>
    );
};

export default Tooltip;
