import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { CommentListProps } from './types';

const CommentList: React.FC<CommentListProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'CommentList'}</Text>
            
        </View>
    );
};

export default CommentList;
