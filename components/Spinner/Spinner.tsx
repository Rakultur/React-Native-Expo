import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { SpinnerProps } from './types';

export const Spinner = (props: SpinnerProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Spinner Component</Text>
        </View>
    );
};
