import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'Pagination'}</Text>
            
        </View>
    );
};

export default Pagination;
