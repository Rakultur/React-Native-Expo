import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { ListProps } from './types';

export const List = (props: ListProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>List Component</Text>
        </View>
    );
};
