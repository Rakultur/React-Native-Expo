import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { TextFieldProps } from './types';

export const TextField = (props: TextFieldProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>TextField Component</Text>
        </View>
    );
};
