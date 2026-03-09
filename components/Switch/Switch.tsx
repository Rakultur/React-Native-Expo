import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { SwitchProps } from './types';

export const Switch = (props: SwitchProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Switch Component</Text>
        </View>
    );
};
