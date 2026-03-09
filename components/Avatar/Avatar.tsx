import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { AvatarProps } from './types';

export const Avatar = (props: AvatarProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Avatar Component</Text>
        </View>
    );
};
