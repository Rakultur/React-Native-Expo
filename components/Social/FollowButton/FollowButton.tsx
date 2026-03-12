import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { FollowButtonProps } from './types';

const FollowButton: React.FC<FollowButtonProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'FollowButton'}</Text>
            
        </View>
    );
};

export default FollowButton;
