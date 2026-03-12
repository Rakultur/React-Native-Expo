import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { ListItemProps } from './types';

const ListItem: React.FC<ListItemProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'ListItem'}</Text>
            
        </View>
    );
};

export default ListItem;
