import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { ModalProps } from './types';

export const Modal = (props: ModalProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Modal Component</Text>
        </View>
    );
};
