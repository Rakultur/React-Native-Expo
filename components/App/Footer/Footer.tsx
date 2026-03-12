import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { FooterProps } from './types';

const Footer: React.FC<FooterProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'Footer'}</Text>
            
        </View>
    );
};

export default Footer;
