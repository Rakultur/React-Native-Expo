import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { NotificationProps } from './types';

export const Notification = (props: NotificationProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Notification Component</Text>
        </View>
    );
};
