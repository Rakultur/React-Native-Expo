import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { NotificationItemProps } from './types';

const NotificationItem: React.FC<NotificationItemProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'NotificationItem'}</Text>
            
        </View>
    );
};

export default NotificationItem;
