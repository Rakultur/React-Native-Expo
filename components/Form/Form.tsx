import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { FormProps } from './types';

export const Form = (props: FormProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Form Component</Text>
        </View>
    );
};
