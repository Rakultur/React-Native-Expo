import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { TooltipProps } from './types';

export const Tooltip = (props: TooltipProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Tooltip Component</Text>
        </View>
    );
};
