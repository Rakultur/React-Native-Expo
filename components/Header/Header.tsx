import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { HeaderProps } from './types';

export const Header = (props: HeaderProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Header Component</Text>
        </View>
    );
};
