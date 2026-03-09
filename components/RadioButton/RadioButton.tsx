import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { RadioButtonProps } from './types';

export const RadioButton = (props: RadioButtonProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>RadioButton Component</Text>
        </View>
    );
};
