import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { CheckboxProps } from './types';

export const Checkbox = (props: CheckboxProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Checkbox Component</Text>
        </View>
    );
};
