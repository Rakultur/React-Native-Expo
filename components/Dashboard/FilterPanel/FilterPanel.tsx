import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { FilterPanelProps } from './types';

const FilterPanel: React.FC<FilterPanelProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'FilterPanel'}</Text>
            
        </View>
    );
};

export default FilterPanel;
