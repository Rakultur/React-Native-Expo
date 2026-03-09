import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { SkeletonProps } from './types';

export const Skeleton = (props: SkeletonProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Skeleton Component</Text>
        </View>
    );
};
