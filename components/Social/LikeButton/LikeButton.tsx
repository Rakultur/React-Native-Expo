import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { LikeButtonProps } from './types';

const LikeButton: React.FC<LikeButtonProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'LikeButton'}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}><Text> Like</Text></TouchableOpacity>
        </View>
    );
};

export default LikeButton;
