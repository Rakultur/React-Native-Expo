import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { ToastProps } from './types';

export const Toast = (props: ToastProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Toast Component</Text>
        </View>
    );
};
