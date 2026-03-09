import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { PaginationProps } from './types';

export const Pagination = (props: PaginationProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>Pagination Component</Text>
        </View>
    );
};
