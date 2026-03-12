import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { WidgetBoxProps } from './types';

const WidgetBox: React.FC<WidgetBoxProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'WidgetBox'}</Text>
            <View style={styles.widgetContent}><Text>Widget content</Text></View>
        </View>
    );
};

export default WidgetBox;
