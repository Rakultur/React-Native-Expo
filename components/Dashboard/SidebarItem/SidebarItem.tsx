import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { SidebarItemProps } from './types';

const SidebarItem: React.FC<SidebarItemProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'SidebarItem'}</Text>
            
        </View>
    );
};

export default SidebarItem;
