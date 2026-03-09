import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { BadgeProps } from './types';

export const Badge = (props: BadgeProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Badge Component</Text>
        </View>
    );
};
