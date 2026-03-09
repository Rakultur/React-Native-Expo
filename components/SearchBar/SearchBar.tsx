import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { SearchBarProps } from './types';

export const SearchBar = (props: SearchBarProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>SearchBar Component</Text>
        </View>
    );
};
