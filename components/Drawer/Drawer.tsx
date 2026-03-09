import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { DrawerProps } from './types';

export const Drawer = (props: DrawerProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Drawer Component</Text>
        </View>
    );
};
