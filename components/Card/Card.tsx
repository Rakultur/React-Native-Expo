import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { CardProps } from './types';

export const Card = (props: CardProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Card Component</Text>
        </View>
    );
};
