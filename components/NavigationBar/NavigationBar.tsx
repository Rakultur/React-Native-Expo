import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { NavigationBarProps } from './types';

export const NavigationBar = (props: NavigationBarProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>NavigationBar Component</Text>
        </View>
    );
};
