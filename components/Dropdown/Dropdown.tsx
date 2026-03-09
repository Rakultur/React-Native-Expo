import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { DropdownProps } from './types';

export const Dropdown = (props: DropdownProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Dropdown Component</Text>
        </View>
    );
};
