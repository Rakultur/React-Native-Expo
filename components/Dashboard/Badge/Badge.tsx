import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { BadgeProps } from './types';

const Badge: React.FC<BadgeProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'Badge'}</Text>
            
        </View>
    );
};

export default Badge;
