import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { StoryCarouselProps } from './types';

const StoryCarousel: React.FC<StoryCarouselProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title || 'StoryCarousel'}</Text>
            
        </View>
    );
};

export default StoryCarousel;
