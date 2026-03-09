import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { MenuProps } from './types';

export const Menu = (props: MenuProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Menu Component</Text>
        </View>
    );
};
