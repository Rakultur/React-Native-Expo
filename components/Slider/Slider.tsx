import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { SliderProps } from './types';

export const Slider = (props: SliderProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Slider Component</Text>
        </View>
    );
};
