import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { PostCardProps } from './types';

const PostCard: React.FC<PostCardProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'PostCard'}</Text>
            
        </View>
    );
};

export default PostCard;
