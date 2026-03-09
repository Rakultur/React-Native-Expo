import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Button Component</Text>
        </View>
    );
};
