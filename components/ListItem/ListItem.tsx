import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { ListItemProps } from './types';

export const ListItem = (props: ListItemProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>ListItem Component</Text>
        </View>
    );
};
