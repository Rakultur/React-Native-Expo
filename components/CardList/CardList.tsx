import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { CardListProps } from './types';

export const CardList = (props: CardListProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>CardList Component</Text>
        </View>
    );
};
