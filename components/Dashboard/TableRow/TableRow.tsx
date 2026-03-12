import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { TableRowProps } from './types';

const TableRow: React.FC<TableRowProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'TableRow'}</Text>
            
        </View>
    );
};

export default TableRow;
