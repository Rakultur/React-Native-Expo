import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { SearchBarProps } from './types';

const SearchBar: React.FC<SearchBarProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'SearchBar'}</Text>
            
        </View>
    );
};

export default SearchBar;
