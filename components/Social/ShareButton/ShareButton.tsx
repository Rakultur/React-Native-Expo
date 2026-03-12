import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { ShareButtonProps } from './types';

const ShareButton: React.FC<ShareButtonProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'ShareButton'}</Text>
            
        </View>
    );
};

export default ShareButton;
