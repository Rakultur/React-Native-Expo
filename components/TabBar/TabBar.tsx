import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { TabBarProps } from './types';

export const TabBar = (props: TabBarProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>TabBar Component</Text>
        </View>
    );
};
