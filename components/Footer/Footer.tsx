import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { FooterProps } from './types';

export const Footer = (props: FooterProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Footer Component</Text>
        </View>
    );
};
