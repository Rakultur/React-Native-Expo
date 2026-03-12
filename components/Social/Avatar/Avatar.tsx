import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { AvatarProps } from './types';

const Avatar: React.FC<AvatarProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'Avatar'}</Text>
            
        </View>
    );
};

export default Avatar;
