import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { StatisticsCardProps } from './types';

const StatisticsCard: React.FC<StatisticsCardProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'StatisticsCard'}</Text>
            
        </View>
    );
};

export default StatisticsCard;
