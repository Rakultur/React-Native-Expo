import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { InputProps } from './types';

export const Input = (props: InputProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Input Component</Text>
        </View>
    );
};
