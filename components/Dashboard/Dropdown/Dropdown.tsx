import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { DropdownProps } from './types';

const Dropdown: React.FC<DropdownProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'Dropdown'}</Text>
            
        </View>
    );
};

export default Dropdown;
