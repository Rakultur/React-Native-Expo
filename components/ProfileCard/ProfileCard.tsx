import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './styles';
import { ProfileCardProps } from './types';

export const ProfileCard = (props: ProfileCardProps) => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text>ProfileCard Component</Text>
        </View>
    );
};
